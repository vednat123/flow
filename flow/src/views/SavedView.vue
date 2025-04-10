<template>
  <div class="home-container">
    <SidebarMenu />

    <main class="main-timeline">
      <h1 class="page-title">Saved Polls</h1>
      <div v-if="savedPolls.length === 0">No polls saved yet.</div>

      <div 
        v-for="(poll, index) in savedPolls" 
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
            {{ option }} ({{ poll.votes[optIndex] }} votes)
          </label>

          <div class="progress-bar">
            <div
              class="progress-fill"
              :style="{ width: getOptionPercent(poll, optIndex) + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </main>

    <TrendingPolls />
  </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue';
import '@/assets/pollStyles.css'
import '@/assets/main.css'
import TrendingPolls from '@/components/TrendingPolls.vue'

export default {
  name: 'SavedView',
  components: {
    SidebarMenu,
    TrendingPolls
  },
  data() {
    return {
      savedPolls: [],
    };
  },
  methods: {
    getOptionPercent(poll, optionIndex) {
      const total = poll.votes.reduce((a, b) => a + b, 0);
      if (total === 0) return 0;
      return ((poll.votes[optionIndex] / total) * 100).toFixed(1);
    },
  },
  mounted() {
    const saved = JSON.parse(localStorage.getItem('savedPolls') || '{}');
    const allPolls = JSON.parse(localStorage.getItem('flow_polls') || '[]');
    this.savedPolls = allPolls.filter(poll => saved[poll.id]);
  },
};
</script>
