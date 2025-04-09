<template>
  <div class="home-container">
    <SidebarMenu />

    <main class="main-timeline">
      <!-- Placeholder -->
    </main>

    <aside class="right-trending">
      <!-- Placeholder -->
    </aside>
  </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue';

export default {
  name: 'NotificationsView',
  components: {
    SidebarMenu,
  },
};

</script>

<style scoped>
/* Paste the exact same styles from HomeView or CreatePollView here */
.home-container {
  display: flex;
  min-height: 100vh;
  background-color: #000;
  color: white;
}

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

.main-timeline {
  width: 60%;
  padding: 1rem;
  box-sizing: border-box;
  border-right: 2px solid crimson;
}

.right-trending {
  width: 20%;
  padding: 1rem;
  box-sizing: border-box;
}
</style>
