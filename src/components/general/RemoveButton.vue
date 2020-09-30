<template>
  <PictureButton v-bind:img="img" v-on:click="handleClick"/>
  
</template>


<script>

import PictureButton from "./PictureButton.vue"

export default {
  name:"RemoveButton",
  components: {
    PictureButton
  },
  methods:{
      handleClick: function(){
          this.$emit('remove');
      }
  },
  data(){
      return {
          img: "remove.png"
      }
  }
}
</script>


<style scoped>


</style>
