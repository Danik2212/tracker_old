<template>
  <div class="tracker-new-item">
    <span>
        <form @submit.prevent="addNewItem" ref="form">
            <input class="text-input" ref="title" type="text" name="title" placeholder="Add new item..."
            v-on:keyup.enter="handleEnterPressed"
            v-model="title"/>
            <NewItemButton ref="new-item-btn" v-on:new="handleNew"/>
        </form>
    </span>
  </div>
</template>


<script>

import { v4 as uuidv4 }  from 'uuid';

import NewItemButton from './general/NewItemButton'

export default {
  name:"TrackerNewItem",
  components:{
      NewItemButton,
  },
  data(){
      return{
          title: ''
      }
  },
  methods:{
      handleNew: function(){
          this.$refs["form"].requestSubmit();
      },
      addNewItem: function(){
          const newItem = {
              id: uuidv4(),
              title: this.title,
              goodCount: 0,
              badCount: 0
          };
          this.$refs.title.value = "";
          this.$emit( 'add-new-item', newItem );
      },
      handleEnterPressed: function(){

      }
  }

}
</script>


<style scoped>

    form{
        display:flex;
    }

    input[type="text"]{
        flex:10;
        padding: 5px;
    }

    input[type="submit"]{
        flex:2;
    }
</style>