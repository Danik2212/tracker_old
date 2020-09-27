<template>
  <div id="app">
    <Tracker v-bind:items="items" />
  </div>
</template>

<script>

import Tracker from './components/Tracker.vue'

export default {
  name: 'App',
  components: {
    Tracker
  },
  data() {
    return {
      items: [
          {
            id: 1,
            title: "Plurals",
            goodCount: 0,
            badCount: 0
          },
          {
            id: 2,
            title: "Grammar",
            goodCount: 0,
            badCount: 0
          },
          {
            id: 3,
            title: "Nouns",
            goodCount: 0,
            badCount: 0
          }
      ]
    }
  }
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
