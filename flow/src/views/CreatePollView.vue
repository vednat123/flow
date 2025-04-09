<template>
  <div class="home-container">
    <!-- Left Sidebar -->
    <aside class="left-nav">
      <h2>Menu</h2>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/messages">Messages</router-link></li>
        <li><router-link to="/create-poll">Create Poll</router-link></li>
        <li><router-link to="/notifications">Notifications</router-link></li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="main-timeline">
      <h1>Create a New Poll</h1>
      <form @submit.prevent="submitPoll">
        <div class="form-group">
          <label for="question">Poll Question</label>
          <input id="question" type="text" v-model="question" required />
        </div>

        <div
          class="form-group"
          v-for="(option, index) in options"
          :key="index"
        >
          <label :for="'option-' + index">Option {{ index + 1 }}</label>
          <input
            :id="'option-' + index"
            type="text"
            v-model="options[index]"
            required
          />
        </div>

        <button type="button" @click="addOption">Add Option</button>
        <button type="submit">Create Poll</button>
      </form>
    </main>

    <!-- Right Sidebar -->
    <aside class="right-trending">
      <h2>Poll Preview</h2>
      <div class="trend-item">
        <h3>{{ question || 'Your poll question will appear here' }}</h3>
        <ul>
          <li v-for="(opt, i) in options" :key="i">{{ opt || 'Option ' + (i + 1) }}</li>
        </ul>
      </div>
    </aside>

    <div>
      <button id="suggestion-panel" @click="showSuggestions">Feeling Stuck? Get Some Ideas!</button>

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
            <p>{{ card.description }}</p>
            <a :href="card.link" target="_blank">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>


// export default {
//   data() {
//     return {
//       showPanel: false
//     };
//   },
//   methods : {
//     togglePanel(){
//       this.showPanel = !this.showPanel 
//       if (this.showPanel){

//       }
//     }
//   }
// };

//import axios from 'axios';
import { getCards} from '@/api'
export default {
  data() {
    return {
      trends: null,  // Data to store API response
      showPanel: false,
      cardData : null,
    };
  },
  async mounted() {
      // Call the async function after the component is mounted
    //
  },
  methods: {
    async showSuggestions(){
      this.togglePanel()
      this.cardData = await getCards();
    },

    togglePanel(){
      this.showPanel = !this.showPanel 
      if (this.showPanel){
  
      }
    }
  }

};


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
}


.sliding-panel.open {
  right: 0;
}

.home-container {
  display: flex;
  min-height: 100vh;
  background-color: #000;
  color: white;
}

/* Left column (20%) */
.left-nav {
  width: 20%;
  background-color: #111;
  padding: 1rem;
  box-sizing: border-box;
  border-right: 2px solid crimson;
}
.left-nav h2 {
  margin-bottom: 1rem;
  color: crimson;
}
.left-nav ul {
  list-style: none;
  padding: 0;
}
.left-nav li {
  margin: 0.5rem 0;
}
.left-nav a {
  color: white;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background 0.3s;
}
.left-nav a:hover {
  background-color: crimson;
}

/* Center (60%) */
.main-timeline {
  width: 60%;
  padding: 1rem;
  box-sizing: border-box;
  border-right: 2px solid crimson;
}
.main-timeline h1 {
  color: crimson;
  margin-bottom: 1.5rem;
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.25rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid crimson;
  border-radius: 4px;
  background-color: #111;
  color: white;
}

/* Buttons */
button {
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  background-color: crimson;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: darkred;
}

/* Right column (20%) */
.right-trending {
  width: 20%;
  padding: 1rem;
  box-sizing: border-box;
}
.right-trending h2 {
  color: crimson;
  margin-bottom: 1rem;
}
.trend-item {
  background-color: #222;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid crimson;
  color: #fff;
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
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.card p {
  font-size: 1em;
  color: #555;
}

.card a {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: #007BFF;
}

.card a:hover {
  text-decoration: underline;
}
</style>
