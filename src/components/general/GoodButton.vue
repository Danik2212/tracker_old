<template>
  <PictureButton v-bind:img="img" v-on:click="handleClick"/>
</template>


<script>

import PictureButton from "./PictureButton.vue"

export default {
  name:"GoodButton",
  components: {
    PictureButton
  },
  methods:{
      handleClick: function(){
          this.$emit('add-good');
      }
  },
  data(){
      return {
          img: "good.png"
      }
  }
}
</script>


<style scoped>

</style>