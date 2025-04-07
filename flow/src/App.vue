<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>


<template>
  <header>
    <div class="container">
      <div class="columns is-vcentered is-flex is-justify-content-center">
          <div class="column has-text-centered is-narrow custom-bg custom-rounded custom-border">
              <h2 class="title is-2 has-text-white">Flow</h2>
              <h3 class="subtitle is-4" style="color:red">A Stats and Opinion Sharing Site</h3>
              <h2 class="subtitle is-6 has-text-white">Providing Insights for All</h2>
          </div>
          <div class="column is-narrow">
                <img alt="Flow logo" class="logo custom-rounded custom-border" src="@/assets/flow-logo.jpg" width="125" height="125" />
          </div>
      </div>

    <nav>
      <button class="button is-rounded is-danger has-text-weight-bold" id="login">
        <RouterLink class="text-white" to="/login">Login</RouterLink>
      </button>
      <button class="button is-rounded is-danger has-text-weight-bold" id="signup">
        <RouterLink class="text-white" to="/home">Sign Up</RouterLink>
      </button>
    </nav>
  </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav > button{
  padding-left: 15px;
  padding-right:15px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}

</style>
