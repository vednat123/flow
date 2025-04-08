<template>
  <div class="home-layout">
    <aside class="sidebar-left">
      <div class="login-logo">
        <img :src="flowLogo" alt="Flow Logo" />
      </div>
      <ul>
<<<<<<< HEAD
        <li>
          <router-link to="/profile">Profile</router-link>
        </li>
        <li>
          <router-link to="/settings">Settings</router-link>
        </li>
        <li>
          <router-link to="/messages">Messages</router-link>
        </li>
        <li>
          <router-link to="/CreatePollview"> Create Poll</router-link>
        </li>
        <li>
          <router-link to="/notifications">Notifications</router-link>
        </li>
=======
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/settings">Settings</router-link></li>
        <li><router-link to="/messages">Messages</router-link></li>
        <li><router-link to="/create-poll">Create Poll</router-link></li>
        <li><router-link to="/notifications">Notifications</router-link></li>
        <li><router-link to="/">Logout</router-link></li>
>>>>>>> refs/remotes/origin/main
      </ul>
    </aside>


    <main class="main-content">
      <h1 class="page-title">Recent Polls</h1>
      <div
        v-for="(poll, index) in polls"
        :key="index"
        class="poll-card"
      >
        <div v-if="poll.image" class="poll-image">
          <img :src="poll.image" alt="Poll Image" />
        </div>

        <div class="poll-content">
          <h2 class="poll-question">{{ poll.question }}</h2>

          <!-- Options with progress bars -->
          <div
            v-for="option in poll.options"
            :key="option"
            class="option-row"
          >
            <div class="option-label">
              {{ option }} ({{ poll.votes[option] }} votes)
            </div>
            <div class="progress-bar">
              <div
                class="progress-fill"
                :style="{ width: getOptionPercent(poll, option) + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- RIGHT SIDEBAR (20%) -->
    <aside class="sidebar-right">
      <h2>Trending Polls</h2>
      <div
        class="trend-item"
        v-for="(trend, idx) in trending"
        :key="idx"
      >
        {{ trend }}
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {

      polls: [
        {
          question: 'Is Vue better than React?',
          image: 'https://picsum.photos/600/300?random=1',
          options: ['Yes', 'No', 'Maybe'],
          votes: { Yes: 10, No: 4, Maybe: 6 },
        },
        {
          question: 'What is your favorite color?',
          image: null, // no image
          options: ['Red', 'Blue', 'Green', 'Other'],
          votes: { Red: 12, Blue: 8, Green: 5, Other: 2 },
        },
        {
          question: 'Which JS framework do you prefer?',
          image: 'https://picsum.photos/600/300?random=2',
          options: ['Vue', 'React', 'Angular'],
          votes: { Vue: 15, React: 10, Angular: 5 },
        },
      ],
      trending: [
        'Cats vs. Dogs Poll',
        'Best Programming Language Poll',
        'Favorite Movie Genre Poll',
      ],
    }
  },
  methods: {
    getOptionPercent(poll, option) {
      const total = Object.values(poll.votes).reduce((a, b) => a + b, 0)
      if (total === 0) return 0
      return ((poll.votes[option] / total) * 100).toFixed(1)
    },
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


.sidebar-left {
  width: 20%;
  background-color: #111;
  padding: 1rem;
  box-sizing: border-box;
  border-right: 2px solid crimson;
}
.sidebar-left h2 {
  margin-bottom: 1rem;
  color: crimson;
}
.sidebar-left ul {
  list-style: none;
  padding: 0;
}
.sidebar-left li {
  margin-bottom: 0.5rem;
}
.sidebar-left a {
  color: white;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background 0.3s;
}
.sidebar-left a:hover {
  background-color: crimson;
}

/* CENTER (Main content) */
.main-content {
  width: 60%;
  padding: 1rem;
  box-sizing: border-box;
  border-right: 2px solid crimson; /* separate center from right sidebar */
}
.page-title {
  margin-bottom: 1rem;
  color: crimson;
  text-align: center;
}

/* Each poll is a "card" */
.poll-card {
  background-color: #222;
  border: 1px solid crimson;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
}
.poll-image img {
  width: 100%;
  display: block;
  object-fit: cover;
}
.poll-content {
  padding: 1rem;
}
.poll-question {
  margin-bottom: 1rem;
  color: #fff;
}

/* Options + progress bar */
.option-row {
  margin-bottom: 0.75rem;
}
.option-label {
  margin-bottom: 0.25rem;
  color: #fff;
}
.progress-bar {
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

/* RIGHT SIDEBAR */
.sidebar-right {
  width: 20%;
  padding: 1rem;
  box-sizing: border-box;
}
.sidebar-right h2 {
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
</style>
