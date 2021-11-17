<template>
  <div class="tracker-cat-name">
    <span class="catTitle" v-bind:class="{'hidden':editMode}" v-on:click="handleTextClick"><h2> {{category.title}}</h2></span>
    <input type="text" id="textInput" ref="textEdit"
        v-model="category.title" 
        v-bind:class="{'hidden':!editMode}"
        v-on:blur="handleBlur"
        v-on:keyup.enter="handleEnterPressed"
        v-on:keyup.esc="handleEscPressed" />
  </div>
</template>


<script>


export default {
  name:"TrackerCatName",
    components:{
  },
  props: ["category"],
  data(){
      return {
          editMode: false
      }
  },
  methods:
  {
        handleTextClick: function(){
            this.activateEditMode();
        },
        handleBlur: function(){
            this.deactivateEditMode();
            this.$emit('title-changed');
        },
        handleEscPressed: function(){
            this.deactivateEditMode();
        },
        handleEnterPressed: function(){
            this.deactivateEditMode();
        },
        activateEditMode: function(){
            this.editMode = true;
            this.$nextTick(() => this.$refs.textEdit.focus());
            this.$emit('edit-mode-activated');
        },
        deactivateEditMode: function(){
            this.editMode = false;
        }
  }
  

}
</script>


<style scoped>


.catTitle{
   cursor: pointer;
}

.hidden{
    display:none
}

input[type="text"]{
    width: 100%;
  }



</style>