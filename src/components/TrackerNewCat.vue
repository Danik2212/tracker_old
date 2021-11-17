<template>
  <div class="tracker-new-cat">
    <span>
        <form @submit.prevent="addNewCat" ref="form">
            <input class="text-input" ref="title" type="text" name="title" placeholder="Add new category..."
            v-on:keyup.enter="handleEnterPressed"
            v-model="title"/>
            <NewCatButton ref="new-cat-btn" v-on:new="handleNewCat"/>
        </form>
    </span>
  </div>
</template>


<script>

import { v4 as uuidv4 }  from 'uuid';

import NewCatButton from './general/NewCatButton'

export default {
  name:"TrackerNewCat",
  components:{
      NewCatButton,
  },
  data(){
      return{
          title: ''
      }
  },
  methods:{
      handleNewCat: function(){
          this.$refs["form"].requestSubmit();
      },
      addNewCat: function(){
          const newCat = {
              id: uuidv4(),
              title: this.title,
              items:[

              ]
          };
          this.$refs.title.value = "";
          this.$emit( 'add-new-cat', newCat);
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