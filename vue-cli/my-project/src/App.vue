<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <hello></hello> -->
    <plj-timer></plj-timer>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Timer from './components/Timer.vue'

export default {
  name: 'app',
  components: {
    'plj-timer': Timer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
