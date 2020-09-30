<template>
  <div class="tracker-new-item">
    <span>
        <form @submit.prevent="addNewItem">
            <input class="text-input" type="text" name="title" placeholder="Add new category..."
            v-on:keyup.enter="handleEnterPressed"
            v-model="title"/>
            <input type="submit" value="Add" class="btn">
        </form>
    </span>
  </div>
</template>


<script>

import { v4 as uuidv4 }  from 'uuid';

export default {
  name:"TrackerNewItem",
  data(){
      return{
          title: ''
      }
  },
  methods:{
      addNewItem: function(){
          const newItem = {
              id: uuidv4(),
              title: this.title,
              goodCount: 0,
              badCount: 0
          };
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