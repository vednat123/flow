<template>
  <div class="home-layout">
    <SidebarMenu />

    <main class="main-timeline">
      <h1 class="page-title">Recent Polls</h1>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search polls..."
        class="search-bar"
      />

      <div 
        v-for="(poll, index) in filteredPolls" 
        :key="index" 
        class="poll-card"
      >
        <div v-if="poll.imagePath" class="poll-image">
          <img :src="poll.imagePath" alt="Poll Image" />
        </div>

        <h2 class="poll-question">{{ poll.question }}</h2>

        <div
          v-for="(option, optIndex) in poll.options"
          :key="optIndex"
          class="option-row"
        >
          <label class="option-label">
            <input
              :type="poll.allowMultiple ? 'checkbox' : 'radio'"
              :name="'poll-' + index"
              :value="option"
              :checked="isChecked(index, option)"
              @change="handleSelection(index, poll.allowMultiple, option)"
            />
            {{ option }} ({{ poll.votes[optIndex] }} votes)
          </label>

          <div class="progress-bar">
            <div
              class="progress-fill"
              :style="{ width: getOptionPercent(poll, optIndex) + '%' }"
            ></div>
          </div>
        </div>

        <button class="theme-button" @click="submitVote(index)">Vote</button>
      </div>
    </main>

    <aside class="right-trending">
      <h2>Trending Polls</h2>
      <div class="trend-item" v-for="(trend, idx) in trending" :key="idx">
        {{ trend }}
      </div>
    </aside>
  </div>
</template>

<script>
import { loadPolls } from '@/stores/pollStorage'
import SidebarMenu from '@/components/SidebarMenu.vue'

export default {
  name: 'HomeView',
  components: { SidebarMenu },

  data() {
    return {
      searchQuery: '',
      polls: [],
      voteSelections: {},
      trending: [
        'Cats vs. Dogs Poll',
        'Best Programming Language Poll',
        'Favorite Movie Genre Poll',
      ],
    }
  },

  computed: {
    filteredPolls() {
      const query = this.searchQuery.toLowerCase()
      return this.polls.filter(poll =>
        poll.question.toLowerCase().includes(query)
      )
    },
  },

  methods: {
    getOptionPercent(poll, optionIndex) {
      const total = poll.votes.reduce((a, b) => a + b, 0)
      if (total === 0) return 0
      return ((poll.votes[optionIndex] / total) * 100).toFixed(1)
    },

    isChecked(index, option) {
      const selection = this.voteSelections[index]
      if (Array.isArray(selection)) {
        return selection.includes(option)
      }
      return selection === option
    },

    handleSelection(index, allowMultiple, option) {
      if (allowMultiple) {
        if (!Array.isArray(this.voteSelections[index])) {
          this.voteSelections[index] = []
        }
        const i = this.voteSelections[index].indexOf(option)
        if (i === -1) {
          this.voteSelections[index].push(option)
        } else {
          this.voteSelections[index].splice(i, 1)
        }
      } else {
        this.voteSelections[index] = option
      }
    },

    submitVote(index) {
      const poll = this.polls[index]
      const selection = this.voteSelections[index]

      if (!selection || (Array.isArray(selection) && selection.length === 0)) {
        alert('Please select an option to vote.')
        return
      }

      const selectedOptions = Array.isArray(selection) ? selection : [selection]
      selectedOptions.forEach(opt => {
        const optIndex = poll.options.indexOf(opt)
        if (optIndex !== -1) {
          poll.votes[optIndex]++
        }
      })

      this.voteSelections[index] = poll.allowMultiple ? [] : null
      localStorage.setItem('flow_polls', JSON.stringify(this.polls))
    },
  },

  mounted() {
    this.polls = loadPolls()
  },
}
</script>

<style scoped>
.home-layout {
  display: flex;
  min-height: 100vh;
  background-color: #000;
  color: white;
}

.main-timeline {
  width: 60%;
  padding: 1rem;
  box-sizing: border-box;
  border-right: 2px solid crimson;
}

.page-title {
  margin-bottom: 1rem;
  color: crimson;
  text-align: center;
}

.poll-card {
  background-color: #222;
  border: 1px solid crimson;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  padding: 1rem;
}

.poll-question {
  margin-bottom: 1rem;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}

.poll-image img {
  width: 100%;
  object-fit: cover;
  display: block;
  margin-bottom: 1rem;
  border-bottom: 1px solid crimson;
}


.option-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.option-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  white-space: nowrap;
  font-size: 0.95rem;
  width: 200px;
  flex-shrink: 0;
}

input[type="radio"],
input[type="checkbox"] {
  accent-color: crimson;
  transform: scale(1.1);
  cursor: pointer;
}

.progress-bar {
  flex-grow: 1;
  background-color: #333;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
}

.progress-fill {
  background-color: crimson;
  height: 100%;
  transition: width 0.4s ease;
}

.right-trending {
  width: 20%;
  padding: 1rem;
  box-sizing: border-box;
}

.trend-item {
  background-color: #222;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid crimson;
  color: #fff;
}

.search-bar {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid crimson;
  border-radius: 8px;
  background-color: #111;
  color: white;
  font-size: 1rem;
}

.search-bar::placeholder {
  color: #ccc;
}
</style>