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
    margin: 0;
    padding: 0;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
