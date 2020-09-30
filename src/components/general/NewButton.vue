<template>
  <PictureButton v-bind:img="img" v-on:click="handleClick"/>
  
</template>


<script>

import PictureButton from "./PictureButton.vue"

export default {
  name:"NewButton",
  components: {
    PictureButton
  },
  methods:{
      handleClick: function(){
          this.$emit('new');
      }
  },
  data(){
      return {
          img: "new.png"
      }
  }
}
</script>


<style scoped>


</style>
