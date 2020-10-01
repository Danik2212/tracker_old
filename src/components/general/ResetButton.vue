<template>
  <PictureButton v-bind:img="img" v-on:click="handleClick"/>
  
</template>


<script>

import PictureButton from "./PictureButton.vue"

export default {
  name:"ResetButton",
  components: {
    PictureButton
  },
  methods:{
      handleClick: function(){
          this.$emit('reset');
      }
  },
  data(){
      return {
          img: "reset.png"
      }
  }
}
</script>


<style scoped>


</style>
