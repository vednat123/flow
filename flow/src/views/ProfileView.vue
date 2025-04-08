<template>
  <div class="home-container">
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

    <main class="main-timeline">
      <img v-bind:src="url" width="250" height="250">
      <h1>Profile</h1>
    </main>

    <aside class="right-trending">
      <!-- Placeholder -->
    </aside>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  data(){
    return{
      url: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
    }
  }
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
