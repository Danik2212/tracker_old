<template>
  <div>
    <div class="tracker-category">
      <TrackerCatName class="cat-name" v-bind:category="category" v-on:title-changed="handleCatTitleChanged" />
      <div class="tracker-right-column">
        <CopyButton class="picture-button" v-on:copy="handleCopy"/>
        <RemoveButton class="picture-button" v-on:remove="handleRemoveCategory"/>
      </div>
    </div>
    <div v-bind:key="item.id" v-for="item in category.items">
      <h3>
          <TrackerItem v-bind:item="item"
          v-on:remove="handleRemoveItem"
          v-on:add-good="handleAddGood"
          v-on:add-bad="handleAddBad"
          v-on:reset="handleResetCount"
          v-on:item-title-changed="handleItemTitleChanged"/>
      </h3>
    </div>
    <div>
      <TrackerNewItem v-on:add-new-item="handleNewItem"/>
    </div>
  </div>
</template>


<script>

import TrackerCatName from './TrackerCatName'
import TrackerItem from './TrackerItem.vue'
import TrackerNewItem from './TrackerNewItem.vue'
import CopyButton from "./general/CopyButton.vue"
import RemoveButton from "./general/RemoveButton.vue"
import { getItemText } from '../functions.js';

export default {
  name:"Tracker",
  components: {
      TrackerCatName,
      TrackerItem,
      TrackerNewItem,
      CopyButton,
      RemoveButton
  },
  props: ["category"],
  methods:{
    handleRemoveItem: function( id ){
      this.$emit( 'item-remove', this.category.id, id );
    },
    handleAddGood: function( id ){
      this.$emit( 'item-add-good', this.category.id, id );
    },
    handleAddBad: function( id ){
      this.$emit( 'item-add-bad', this.category.id, id );
    },
    handleResetCount: function( id ){
      this.$emit( 'item-reset', this.category.id, id );
    },
    handleNewItem: function( newItem ){
      this.$emit( 'item-new-item', this.category.id, newItem );
    },
    handleItemTitleChanged: function(){
      this.$emit( 'item-title-changed');
    },
    handleCatTitleChanged: function(){
      this.$emit( 'cat-title-changed');
    },
    handleRemoveCategory: function(){
      this.$emit( 'cat-remove', this.category.id );
    },
    handleCopy: function(){
      var str = this.category.title + "\r\n";

      this.category.items.forEach((x) => str += getItemText(x) + "\r\n");

      const el = document.createElement('textarea');
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    },
  }
}
</script>



<style scoped>

  .tracker-category{
    background: #f4f4f4;
    display:flex;
  }


  .cat-name{
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