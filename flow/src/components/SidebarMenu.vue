<script setup>
import {useLoggedIn} from '@/stores/storeAccounts'

const userStore = useLoggedIn();
console.log(userStore.user)
</script>

<template>
  <aside class="sidebar-left">
    <div class="logo-container">
      <router-link to="/home">
        <img src="@/assets/Flow-Logo.jpg" class="flow-logo" />
      </router-link>
      <p class="user-name">{{ userStore.user }}</p>
    </div>
    <h2>Menu</h2>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><router-link to="/messages">Messages</router-link></li>
      <li><router-link to="/create-poll">Create Poll</router-link></li>
      <li><router-link to="/saved">Saved</router-link></li>
      <li>
        <button @click="showLogoutConfirm = true" class="logout-button">Logout</button>
      </li>
    </ul>
    <div v-if="showLogoutConfirm" class="logout-popup">
      <div class="popup-content">
        <h3>Confirm Logout</h3>
        <p>Are you sure you want to log out?</p>
        <div class="popup-buttons">
          <button @click="confirmLogout" class="confirm-btn">Yes</button>
          <button @click="showLogoutConfirm = false" class="cancel-btn">No</button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SidebarLeft',
  data() {
    return {
      showLogoutConfirm: false,
    }
  },
  methods: {
    confirmLogout() {
      this.showLogoutConfirm = false
      this.$router.push('/')
    }
  }
}
</script>

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

.sidebar-left a, .logout-button {
  color: white;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background 0.3s;
  display: block;
}

.logout-button{
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 15px;
}

.sidebar-left a:hover, .logout-button:hover {
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

.logout-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: #111;
  padding: 1rem;
  border-radius: 4px;
  border: 2px solid crimson;
  text-align: center;
  width: 300px;
}

.popup-content h3 {
  color: crimson;
  margin-bottom: 0.5rem;
}

.popup-content p {
  color: white;
  margin-bottom: 1rem;
}

.popup-buttons {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.confirm-btn, .cancel-btn {
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 4px;
  color: white;
  transition: background 0.3s;
  cursor: pointer;
}

.confirm-btn {
  background-color: crimson;
}

.cancel-btn {
  background-color: #333;
}

.confirm-btn:hover {
  background-color: #a00;
}

.cancel-btn:hover {
  background-color: #444;
}

.logout-button {
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  width: 100%;
}

.user-name {
  color: crimson;
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  padding-left: 0.5rem;
  margin-top: 0.5rem;
  display: block;
  text-shadow: 1px 1px 2px rgba(255, 0, 0, 0.2);
  letter-spacing: 0.3px;
}

/*Om - Im adding this as a cool glowing effect as an easter egg cause why not*/
.user-name:hover {
  color: #ff4d6d;
  text-shadow: 0 0 6px rgba(255, 77, 109, 0.5);
  cursor: default;
}

</style>