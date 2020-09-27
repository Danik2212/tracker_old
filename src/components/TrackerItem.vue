<template>
  <div class="tracker-item">
    <TrackerItemName v-bind:item="item"/>
  </div>
</template>


<script>


import TrackerItemName from "./TrackerItemName.vue"

export default {
  name:"TrackerItem",
  components:{
    TrackerItemName,
  },
  props: ["item"],

}
</script>


<style scoped>

  .tracker-item{
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }

  .is-complete{
    text-decoration: line-through;
  }

  .del{
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }

</style>