<template>
  <div class="home-container">
    <!-- Left Sidebar -->
    <SidebarMenu />

    <!-- Main Content -->
    <main class="main-timeline">
      <h1 class="page-title">Create a New Poll</h1>
      <form @submit.prevent="submitPoll">
        <div class="form-group">
          <label for="question">Poll Question</label>
          <input id="question" type="text" v-model="question" required maxlength="70" />
        </div>

        <small class="char-limit-text">(Poll question can have up to 70 characters maximum)</small>

        <div class="form-group" v-for="(option, index) in options" :key="index">
          <label :for="'option-' + index">Option {{ index + 1 }}</label>
          <input
            :id="'option-' + index"
            type="text"
            v-model="options[index]"
            required
            maxlength="16"
          />
        </div>
        <small class="char-limit-text">(Each option can have up to 16 characters maximum)</small>

        <button type="button" class="theme-button" @click="addOption" :disabled="options.length >= 8">Add Option</button>
        <small class="char-limit-text">(Up to 8 options maximum)</small>

        <div class="form-group checkbox-row">
          <label for="multiple">
            <input type="checkbox" id="multiple" v-model="allowMultiple" />
            Allow multiple answers
          </label>
        </div>

        <div class="form-group">
          <label for="imageUpload">Upload Poll Image</label>
          <input id="imageUpload" type="file" @change="handleImageUpload" accept="image/*" />
        </div>

        <button type="submit" class="theme-button">Create Poll</button>
      </form>
    </main>

    <!-- Poll Preview -->
    <aside class="right-sidebar">
      <h2>Poll Preview</h2>
      <div class="poll-card">
        <div class="poll-image" v-if="previewImage">
          <img :src="previewImage" alt="Poll Preview" />
        </div>

        <div class="poll-content">
          <h2 class="poll-question">{{ question || 'Your poll question will appear here' }}</h2>
          <div
            class="option-row"
            v-for="(opt, i) in options"
            :key="i"
          >
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: '0%' }"></div>
            </div>
            <div class="vote-choice">
              <input
                :type="allowMultiple ? 'checkbox' : 'radio'"
                :name="'preview-group'"
                :id="'preview-opt-' + i"
              />
              <label :for="'preview-opt-' + i">{{ opt || 'Option ' + (i + 1) }} (0 votes)</label>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <div>
      <button id="suggestion-panel" class="theme-button" @click="showSuggestions">Feeling Stuck? Get Some Ideas!</button>

      <div class="sliding-panel theme" :class="{ open: showPanel }" >
        <button class="close-btn" @click="togglePanel">×</button>
        <div class="card-container">
          <!-- Loop through the cardData array and display each card -->
          <div 
            class="card" 
            v-for="(card, index) in cardData" 
            :key="index">
            
            <!-- Card content -->
            <h3>{{ card.title }}</h3>
            <img :src="card.description" alt="Card Icon" height="100" width="100%" />

            <a :href="card.link" target="_blank">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCards } from '@/api'
import { Poll } from '@/Poll'
import { savePoll } from '@/stores/pollStorage'      
import { useRouter } from 'vue-router'               
import SidebarMenu from '@/components/SidebarMenu.vue'

export default {
  name: 'CreatePollView',
  components: { SidebarMenu },
  data() {
    return {
      question: '',
      options: ['', ''],
      allowMultiple: false,
      previewImage: null,
      showPanel: false,
      cardData: null,
    }
  },
  methods: {
    addOption() {
      this.options.push('')
    },
    handleImageUpload(event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = () => {
          this.previewImage = reader.result
        }
        reader.readAsDataURL(file)
      }
    },

    submitPoll() {
      const cleanOptions = this.options.filter(opt => opt.trim() !== '')
      if (!this.question.trim() || cleanOptions.length < 2) {
        alert('Enter a question and at least two options.')
        return
      }

      const poll = new Poll({
        name: this.question,
        choosableOptions: cleanOptions,
        allowsMultipleSelection: this.allowMultiple,
        imagePath: this.previewImage,
      })

      savePoll({
        id: poll.id,
        question: poll.name,
        options: poll.choosableOptions,
        votes: new Array(poll.numOfOptions).fill(0),
        allowMultiple: poll.allowsMultipleSelection,
        imagePath: poll.imagePath,
        createdAt: new Date().toISOString(),
        likes: 0,
      })

      this.$router.push('/home')
    },


    async showSuggestions() {
      this.togglePanel()
      this.cardData = await getCards()
    },
    togglePanel() {
      this.showPanel = !this.showPanel
    },
  },
  setup() {
    return { router: useRouter() }   
  },
}
</script>

<style scoped>
.sliding-panel {
  position: fixed;
  bottom: 0;
  right: -300px; /* Hide off screen */
  width: 300px;
  height: 60%;
  padding: 20px;
  transition: right 0.3s ease;
  z-index: 1000;
  overflow-y: auto; /* Enables scrolling if content overflows vertically */
}

.sliding-panel.open {
  right: 0;
  transform: translateX(0); /* Slide in panel when active */
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.25rem;
}

input[type="text"],
input[type="file"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid crimson;
  border-radius: 4px;
  background-color: #111;
  color: white;
}

.checkbox-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  color: white;
  font-weight: bold;
}

.checkbox-row input[type="checkbox"] {
  transform: scale(1.2);
  accent-color: crimson;
}


#suggestion-panel{
  position: fixed;
  bottom: 30px;
  right: 20px;
  text-align: center;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.card {
  background-color: rgb(248, 66, 66);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  color: white;
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 16px;
  background: none;
  border: 1px solid white;
  border-radius:100%;
  font-size: 24px;
  cursor: pointer;
  color: white;
}

.card:hover {
  transform: translateY(-5px);
}

.card img{
  border-radius: 8px;
  border: 1px solid black;
}

.card h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
  color:  white;
  text-shadow:
    -0.75px -0.75px 0 black,
    0.75px -0.75px 0 black,
    -0.75px  0.75px 0 black,
    0.75px  0.75px 0 black;
    font-weight: bold;
}

.card p {
  font-size: 1em;
  color: #555;
}

.card a {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: lightskyblue;
}

.card a:hover {
  text-decoration: underline;
}

.option-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.vote-choice {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 0.9rem;
  white-space: nowrap;
}

.char-limit-text {
  font-size: 0.75rem;
  color: #aaa;
  margin-left: 0.25rem;
  padding-bottom: 10px;
  padding-top: 6px;
  display: block;
}
</style>

