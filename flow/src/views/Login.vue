<script setup>
  import flowLogo from '@/assets/Flow-Logo.jpg'
  import getAccounts from '@/stores/getAccounts.js'
  import {buildPanel, fetchAccounts} from '@/login'
  import { onMounted } from 'vue'

  import { useAccountStore } from '@/stores/storeAccounts'

  const accountStore = useAccountStore()

  onMounted(() => {
    accountStore.fetchAccounts() // Stores accounts from DB in Pinia
  })
</script>

<template>
  <section class="login-page">
    <div class="login-container">
      <div class="login-heading">
        <h2>Flow</h2>
        <h3>A Stats and Opinion Sharing Site</h3>
        <p>Providing Insights for All</p>
      </div>

      <div class="login-logo">
        <img :src="flowLogo" alt="Flow Logo" />
      </div>
    
      <button @click="login" class="login-button">Login</button>
      <button @click="signup" class="login-button">Sign Up</button>
 
      
      <div class="login-box" id="login-box">
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      errorMsg: '',
      flowLogo,
    }
  },
  methods: {
    login() {
      buildPanel(false, "")
    },
    signup() {
      buildPanel(true, "")
    },
  },
}
</script>

<style scoped>

.login-page {
  width: 100%;
  height: 100vh;
  background: black url("@/assets/wallpaper.jpg") center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  background: rgba(35, 34, 34, 0.85);
  border: 2px solid rgba(137, 7, 7, 0.7);
  border-radius: 30px;
  padding: 2rem;
  width: 350px;
  max-width: 90%;
  text-align: center;
}

.login-heading h2 {
  color: crimson;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.login-heading h3 {
  color: white;
  margin-bottom: 0.5rem;
}
.login-heading p {
  color: #ccc;
}

.login-logo {
  margin: 1rem 0;
}
.login-logo img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid crimson;
}

.login-box {
  margin-top: 1rem;
}

</style>
