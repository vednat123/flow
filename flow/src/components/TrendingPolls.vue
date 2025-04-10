<template>
  <aside class="right-trending">
    <h2>Trending Polls</h2>
    <div class="trend-item" v-for="(trend, idx) in trending" :key="idx">
      {{ trend }}
    </div>
  </aside>
</template>

<script>
export default {
  name: 'TrendingPolls',
  props: {
    trending: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchQuery: '',
      polls: [],
      voteSelections: {},
      trending: [
        'Cats vs. Dogs Poll',
        'Best Programming Language Poll',
        'Favorite Movie Genre Poll',
      ], // Default trending polls
    };
  },
}
</script>


<style scoped>
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
</style>