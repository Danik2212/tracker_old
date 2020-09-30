<template>
  <div class="tracker-item">
    <input type="submit" value="+1" class="good-btn" v-on:click="handleAddGood">
    <input type="submit" value="-1" class="bad-btn" v-on:click="handleAddBad">
    <TrackerItemScore class="item-score" v-bind:item="item"/>
    <TrackerItemName class="item-name" v-bind:item="item" v-on:title-changed="handleTitleChanged" />
    <RemoveButton v-on:remove="handleRemoveItem"/>
  </div>
</template>


<script>


import TrackerItemName from "./TrackerItemName.vue"
import TrackerItemScore from "./TrackerItemScore.vue"
import RemoveButton from "./general/RemoveButton.vue"

export default {
  name:"TrackerItem",
  components:{
    TrackerItemName,
    TrackerItemScore,
    RemoveButton
  },
  props: ["item"],
  methods:{
    handleRemoveItem: function(){
      this.$emit( 'remove', this.item.id );
    },
    handleAddGood: function(){
      this.$emit( 'add-good', this.item.id );
    },
    handleAddBad: function(){
      this.$emit( 'add-bad', this.item.id );
    },
    handleTitleChanged: function(){
      this.$emit( 'title-changed', this.item.id );
    }
  }

}
</script>


<style scoped>

  .tracker-item{
    background: #f4f4f4;
    border-bottom: 1px #ccc dotted;
    display:flex;
  }

  .item-score{
    flex:0;
    padding: 5px;
    margin: auto;
  }

  .item-name{
    flex:20;
    padding: 5px;
  }

  input[type="submit"]{
    width: 50px;
  }

  .good-btn{
    background: #00b503;
    color: #fff;
  }

  .bad-btn{
    background: #940101;
    color: #fff;
  }



</style>