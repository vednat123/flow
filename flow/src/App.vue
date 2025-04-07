<!-- src/App.vue -->
<template>
  <!-- Root container for your app. The RouterView will load either Login or Home, etc. -->
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* If you want a global style or wrapper, you could do it here. 
   But you likely rely on your main.css for general theming. */
</style>
