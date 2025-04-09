<template>
  <aside class="sidebar-left">
    <div class="logo-container">
      <router-link to="/home">
        <img src="@/assets/Flow-Logo.jpg" class="flow-logo" />
      </router-link>
    </div>
    <h2>Menu</h2>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><router-link to="/messages">Messages</router-link></li>
      <li><router-link to="/create-poll">Create Poll</router-link></li>
      <li><router-link to="/notifications">Notifications</router-link></li>
      <li><router-link to="/">Logout</router-link></li>
    </ul>
  </aside>
</template>

<style scoped>
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

.logo-container {
  margin-bottom: 1rem;
  display: flex;
  justify-content: left;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid crimson;
}


.flow-logo {
  max-width: 100%;
  height: auto;
  max-height: 30px;
  object-fit: contain;
  border: none;
  box-shadow: none;
}
</style>