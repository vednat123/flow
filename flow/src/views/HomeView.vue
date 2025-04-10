<template>
  <div class="home-container">
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
        <button class="theme-button" @click="toggleSave(index)">
          {{ savedPolls[poll.id] ? '💾 Saved' : '📁 Save' }}
        </button>
      </div>
    </main>

    <TrendingPolls />
  </div>
</template>

<script>
import { loadPolls } from '@/stores/pollStorage'
import SidebarMenu from '@/components/SidebarMenu.vue'
import '@/assets/pollStyles.css'
import TrendingPolls from '@/components/TrendingPolls.vue'

export default {
  name: 'HomeView',
  components: { SidebarMenu, TrendingPolls},

  data() {
    return {
      searchQuery: '',
      polls: [],
      voteSelections: {},
      savedPolls: JSON.parse(localStorage.getItem('savedPolls') || '{}'),
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
    toggleSave(index) {
      const poll = this.polls[index];
      const pollId = poll.id;

      if (!pollId) return;

      if (this.savedPolls[pollId]) {
        delete this.savedPolls[pollId]; // Vue 3
      } else {
        this.savedPolls[pollId] = true; // Vue 3
      }

      localStorage.setItem('savedPolls', JSON.stringify(this.savedPolls));
    },

  },
  mounted() {
    this.polls = loadPolls();
  }
}
</script>

<style scoped>

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