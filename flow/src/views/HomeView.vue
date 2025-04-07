<template>
  <div class="home-container">

    <aside class="left-nav">
      <h2>Menu</h2>
      <ul>
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
          <router-link to="/notifications">Notifications</router-link>
        </li>
      </ul>
    </aside>

    <main class="main-timeline">
      <h1>Timeline / Polls</h1>
      <div class="poll" v-for="(poll, index) in polls" :key="index">
        <h3>{{ poll.question }}</h3>
        <p>Options: {{ poll.options.join(', ') }}</p>
      </div>
    </main>

    <aside class="right-trending">
      <h2>Trending Polls</h2>
      <div
        class="trend-item"
        v-for="(trend, tindex) in trending"
        :key="tindex"
      >
        <p>{{ trend }}</p>
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
        { question: 'Is Vue better than React?', options: ['Yes', 'No'] },
        { question: 'Favorite color?', options: ['Red', 'Blue', 'Green'] },
      ],
      trending: [
        'Best Restaurants Poll',
        'Favorite Programming Language Poll',
        'Marvel vs DC Poll',
      ],
    }
  },
}
</script>

<style scoped>
/* 
  Layout: 20% left, 60% center, 20% right 
  We'll do a simple flex approach with a dark/black background
  and red highlights. 
*/

.home-container {
  display: flex;
  min-height: 100vh;
  background-color: #000; /* black background */
  color: white;           /* default text color */
}

/* Left column (20%) */
.left-nav {
  width: 20%;
  background-color: #111; /* slightly lighter black */
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
  margin-bottom: 1rem;
}
.poll {
  background-color: #222;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid crimson;
}
.poll h3 {
  margin-bottom: 0.5rem;
  color: #fff;
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
</style>
