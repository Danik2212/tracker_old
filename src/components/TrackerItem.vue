<template>
  <div class="tracker-item" id="itemdiv">
    <div class="tracker-left-column">
      <GoodButton class="picture-button" v-on:add-good="handleAddGood"/>
      <BadButton class="picture-button" v-on:add-bad="handleAddBad"/>
      <TrackerItemScore class="item-score" v-bind:item="item"/>
    </div>
    <TrackerItemName class="item-name" v-bind:item="item" v-on:title-changed="handleTitleChanged" />
    <div class="tracker-right-column">
      <CopyButton class="picture-button" v-on:copy="handleCopy"/>
      <ResetButton class="picture-button" v-on:reset="handleReset"/>
      <RemoveButton class="picture-button" v-on:remove="handleRemoveItem"/>
    </div>
  </div>
</template>


<script>


import TrackerItemName from "./TrackerItemName.vue"
import TrackerItemScore from "./TrackerItemScore.vue"
import RemoveButton from "./general/RemoveButton.vue"
import GoodButton from "./general/GoodButton.vue"
import BadButton from "./general/BadButton.vue"
import ResetButton from "./general/ResetButton.vue"
import CopyButton from "./general/CopyButton.vue"
import { itemCopy } from '../functions.js';

export default {
  name:"TrackerItem",
  components:{
    TrackerItemName,
    TrackerItemScore,
    RemoveButton,
    GoodButton,
    BadButton,
    ResetButton,
    CopyButton
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
      this.$emit( 'title-changed');
    },
    handleReset: function(){
      this.$emit( 'reset', this.item.id );
    },
    handleCopy: function(){
      itemCopy( this.item );
    } 
  }

}
</script>


<style scoped>

  .tracker-item{
    background: #f4f4f4;
    display:flex;
  }

  #itemdiv{
    border-bottom: 2px #ccc dotted;
  }
  .item-score{
    flex:0;
    padding: 5px;
    width: 130px;
    margin: auto;
  }

  .item-name{
    flex:auto;
    padding: 5px;
    overflow: hidden !important;
    text-overflow: ellipsis;
    display: -webkit-box;
  }

  .picture-button{
    flex-shrink:0;
  }




</style>