<!-- src/views/Login.vue -->
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

      <div class="login-box">
        <h5 v-if="errorMsg" class="error">{{ errorMsg }}</h5>
        
        <label for="username">Username:</label>
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="Enter Username"
        />

        <label for="password">Password:</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Enter Password"
        />

        <button @click="login" class="login-button">Login</button>
        <button @click="signup" class="login-button">Sign Up</button>
      </div>
    </div>
  </section>
</template>

<script>
import flowLogo from '@/assets/Flow-Logo.jpg'

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
      if (!this.username || !this.password) {
        this.errorMsg = 'Please fill in both username and password.'
        return
      }
      // Example "login" logic:
      alert('Login successful. In a real app, you would store a token and redirect.')
      // For now, just redirect to /home
      this.$router.push('/home')
    },
    signup() {
      // Maybe you want a separate sign-up route, or do it here
      alert('Sign up logic here. Or go to /signup?')
    },
  },
}
</script>

<style scoped>
/* Example black+red styling. 
   You can refine or move these to main.css if you want them global. */

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
.login-box label {
  display: block;
  color: white;
  margin-top: 1rem;
}
.login-box input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid black;
  background-color: rgba(137, 7, 7, 0.7);
  color: white;
}
.login-button {
  margin-top: 1rem;
  background: crimson;
  color: white;
  border-radius: 30px;
  border: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
}
.login-button:hover {
  background: #f03a5f;
}

.error {
  color: red;
  margin-bottom: 1rem;
}
</style>
