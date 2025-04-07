
<template>
  <div class="container is-justify-content-center" id="body">
    <div class="column">
      <div class="field">
      <label class="label">Username</label> <!-- Input fields-->
      <div class="control">
        <input class="input" type="text" v-model="username" placeholder="Enter username">
      </div>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="password" v-model="password" placeholder="Enter password">
      </div>
    </div>
    </div>

    <button class="button is-danger" v-on:click="handleLogin">
      <RouterLink class="text-white" to="/about">Login</RouterLink>
    </button>
  </div>
</template>
  
  <script>
  export default {
    name: "FlowLanding",
    data() {
      return {
        showBox: false,
      };
    },
    methods: {
      handleLogin() {
        this.showBox = true;
        console.log("Login button clicked");

        // You can call D3 or other logic here if needed
      },
      handleSignup() {
        this.showBox = true;
        console.log("Sign Up button clicked");
      },
    },
  };
  </script>
  

  