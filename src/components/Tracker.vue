<template>
  <div>
    <div v-bind:key="item.id" v-for="item in items">
      <h3>
          <TrackerItem v-bind:item="item"/>
      </h3>
    </div>
  </div>


</template>


<script>

import TrackerItem from './TrackerItem.vue'

export default {
  name:"Tracker",
  components: {
      TrackerItem
  },
  props: ["items"]
}
</script>


<style scoped>

</style>