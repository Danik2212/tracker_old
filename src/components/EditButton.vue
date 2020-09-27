<template>
  <img src="../assets/edit.png" v-on:click="handleClick"/>
</template>


<script>

export default {
  name:"EditButton",
  methods:{
      handleClick: function(){
          this.$emit('trackerItem-edit');
      }
  }
}
</script>


<style scoped>

img{
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    vertical-align: middle;
    margin: 5px;
}

</style>