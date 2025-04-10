<template>
  <div class="home-layout">
    <SidebarMenu />

    <main class="main-content">
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
    <aside class="right-trending">
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
import { loadPolls } from '@/stores/pollStorage'   
import SidebarMenu from '@/components/SidebarMenu.vue'

export default {
  name: 'HomeView',
  components: { SidebarMenu },

  data() {
    return {
      searchQuery: '',
      polls: [],                 
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
    getOptionPercent(poll, option) {
      const total = Object.values(poll.votes).reduce((a, b) => a + b, 0)
      if (total === 0) return 0
      return ((poll.votes[option] / total) * 100).toFixed(1)
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
