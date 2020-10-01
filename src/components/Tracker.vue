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
          v-on:add-bad="handleAddBad"
          v-on:reset="handleResetCount"
          v-on:title-changed="handleTitleChanged"/>
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
      var itemIndex = this.getItemIndexFromId( id );
      var item = this.items[ itemIndex ];
      item.goodCount++;
      this.items.splice( itemIndex, 1, item);
    },
    handleAddBad: function( id ){
      var itemIndex = this.getItemIndexFromId( id );
      var item = this.items[ itemIndex ];
      item.badCount++;
      this.items.splice( itemIndex, 1, item);
    },
    handleTitleChanged: function( id ){
      var itemIndex = this.getItemIndexFromId( id );
      var item = this.items[ itemIndex ];
      this.items.splice( itemIndex, 1, item);
    },
    handleResetCount: function( id ){
      var itemIndex = this.getItemIndexFromId( id );
      var item = this.items[ itemIndex ];
      item.badCount = 0;
      item.goodCount = 0;
      this.items.splice( itemIndex, 1, item);
    },
    getItemIndexFromId: function( id ){
      return this.items.findIndex( item => item.id === id );
    },
    saveItems: function(){
      const parsed = JSON.stringify( this.items );
      localStorage.setItem('items', parsed);
    }
  },
  data() {
    return {
      items: [
          {
            id: 1,
            title: "Demo",
            goodCount: 0,
            badCount: 0
          }
      ]
    }
  },
  mounted(){
    if( localStorage.getItem('items')){
      try{
        this.items = JSON.parse( localStorage.getItem('items') );
      }
      catch( e )
      {
        localStorage.removeItem( 'items' );
      }
    }
  },
  watch:{
    items(){
      console.log(123);
      this.saveItems();
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