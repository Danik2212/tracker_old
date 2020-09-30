<template>
  <img v-bind:src="require('../../assets/' + img)" v-on:click="handleClick"/>
</template>


<script>

export default {
  name:"EditButton",
  props:["img"],
  methods:{
      handleClick: function(){
          this.$emit('click');
      }
  }
}
</script>


<style scoped>

img{
    display: inline-block;

    width: 24px;
    height: 24px;
    margin: 5px;
    cursor: pointer;
    vertical-align: middle;
    border: 2px solid #1f1f1f;
    border-radius: 12px;
    padding: 2px;
}


</style>