<template>
  <div class="tracker-div">
    <div>
      <TrackerNewCat v-on:add-new-cat="handleNewCategory"/>
    </div>
    <div v-bind:key="category.id" v-for="category in categories">
      <h3>
          <TrackerCategory v-bind:category="category"
          v-on:cat-remove="handleRemoveCategory"
          v-on:cat-title-changed="handleCatTitleChanged"
          v-on:item-remove="handleRemoveItem"
          v-on:item-add-good="handleAddGood"
          v-on:item-add-bad="handleAddBad"
          v-on:item-reset="handleResetCount"
          v-on:item-new-item="handleNewItem"
          v-on:item-title-changed="handleItemTitleChanged"/>
      </h3>
    </div>
  </div>

</template>


<script>

import TrackerCategory from './TrackerCategory.vue'
import TrackerNewCat from './TrackerNewCat.vue'

export default {
  name:"Tracker",
  components: {
      TrackerCategory,
      TrackerNewCat
  },
  methods:{
    handleNewCategory: function( newCategory ){
      this.categories = [...this.categories, newCategory];
      this.save();
    },
    handleRemoveCategory: function( id ){
      this.categories = this.categories.filter( category => category.id !== id );
      this.save();
    },
    handleCatTitleChanged: function(){
      this.save();
    },

    handleNewItem: function( categoryId, newItem ){
      var category = this.getCategoryFromId( categoryId );
      category.items = [...category.items, newItem];
      this.save();
    },
    handleRemoveItem: function( categoryId, id ){
      var category = this.getCategoryFromId( categoryId );
      category.items = category.items.filter( item => item.id !== id );
      this.save();
    },
    handleAddGood: function( categoryId, id ){
      var item = this.getItemFromId( categoryId, id );
      item.goodCount++;
      this.save();
    },
    handleAddBad: function( categoryId, id ){
      var item = this.getItemFromId( categoryId, id );
      item.badCount++;
      this.save();
    },
    handleItemTitleChanged: function(){
      this.save();
    },
    handleResetCount: function( categoryId, id ){
      var item = this.getItemFromId( categoryId, id );
      item.badCount = 0;
      item.goodCount = 0;
      this.save();
    },
    getCategoryFromId: function( categoryId ){
      return this.categories.find( category => category.id === categoryId );
    },
    getItemFromId: function( categoryId, id ){
      var category = this.getCategoryFromId( categoryId );
      return category.items.find( item => item.id === id );
    },
    save: function(){
      const parsed = JSON.stringify( this.categories );
      localStorage.setItem('categories', parsed);
    }
  },
  data() {
    return {
      categories:[
        {
           id: 1,
           title: "Demo",
           items: [
            {
              id: 2,
              title: "Demo",
              goodCount: 0,
              badCount: 0
            }
          ]
        }
      ]
     
    }
  },
  mounted(){
    if( localStorage.getItem('categories')){
      try{
        this.categories = JSON.parse( localStorage.getItem('categories') );
      }
      catch( e )
      {
        localStorage.removeItem( 'categories' );
      }
    }
  },
  watch:{
    categories(){
      console.log(123);
      this.save();
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