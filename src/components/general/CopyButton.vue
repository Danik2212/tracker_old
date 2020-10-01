<template>
  <PictureButton v-bind:img="img" v-on:click="handleClick"/>
  
</template>


<script>

import PictureButton from "./PictureButton.vue"

export default {
  name:"CopyButton",
  components: {
    PictureButton
  },
  methods:{
      handleClick: function(){
          this.$emit('copy');
      }
  },
  data(){
      return {
          img: "copy.png"
      }
  }
}
</script>


<style scoped>


</style>
