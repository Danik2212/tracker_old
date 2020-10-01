<template>
  <div id="app">
    <Header/>
    <Tracker/>
  </div>
</template>

<script>

import Tracker from './components/Tracker.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Tracker,
    Header
  },
  
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: auto;
    padding: 0;
    max-width: 500px;
  }

  body{
    font-family: Tahoma, Geneva, sans-serif;
    line-height: 1.4;
  }
</style>
