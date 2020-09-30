<template>
  <PictureButton v-bind:img="img" v-on:click="handleClick"/>
  
</template>


<script>

import PictureButton from "./PictureButton.vue"

export default {
  name:"BadButton",
  components: {
    PictureButton
  },
  methods:{
      handleClick: function(){
          this.$emit('add-bad');
      }
  },
  data(){
      return {
          img: "bad.png"
      }
  }
}
</script>


<style scoped>


</style>
