<template>
  <div class="tracker-div">
    <div>
      <TrackerNewItem v-on:add-new-item="handleNewItem"/>
    </div>
    <div v-bind:key="item.id" v-for="item in items">
      <h3>
          <TrackerItem v-bind:item="item"
          v-on:remove="handleRemoveItem"
          v-on:add-good="handleAddGood"
          v-on:add-bad="handleAddBad"/>
      </h3>
    </div>
  </div>




</template>


<script>

import TrackerItem from './TrackerItem.vue'
import TrackerNewItem from './TrackerNewItem.vue'

export default {
  name:"Tracker",
  components: {
      TrackerItem,
      TrackerNewItem
  },
  methods:{
    handleNewItem: function( newItem ){
      this.items = [...this.items, newItem];
    },
    handleRemoveItem: function( id ){
      this.items = this.items.filter( item => item.id !== id );
    },
    handleAddGood: function( id ){
      this.getItemFromId( id ).goodCount++;
    },
    handleAddBad: function( id ){
      this.getItemFromId( id ).badCount++;
    },
    getItemFromId: function( id ){
      return this.items.filter( item => item.id === id );
    }
  },
  data() {
    return {
      items: [
          {
            id: 1,
            title: "Plurals",
            goodCount: 0,
            badCount: 0
          },
          {
            id: 2,
            title: "Grammar",
            goodCount: 0,
            badCount: 0
          },
          {
            id: 3,
            title: "Nouns",
            goodCount: 0,
            badCount: 0
          }
      ]
    }
  }
}
</script>


<style scoped>
  .tracker-div{
    margin: auto;
    border: 2px solid;
  }
</style>