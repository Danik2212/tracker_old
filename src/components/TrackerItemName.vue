<template>
  <span class="tracker-item">
    <span id="spanTitle" v-bind:class="{'hidden':editMode}"> {{item.title}}</span>
    <input type="text" id="textInput" 
        v-model="item.title" 
        v-bind:class="{'hidden':!editMode}"
        v-on:blur="handleBlur"
        v-on:keyup.enter="handleEnterPressed"
        v-on:keyup.esc="handleEscPressed" />
    <EditButton v-on:trackerItem-edit="onTrackerItemEdit"/>
  </span>
</template>


<script>

import EditButton from "./EditButton.vue"

export default {
  name:"TrackerItemName",
    components:{
     EditButton
  },
  props: ["item"],
  data(){
      return {
          editMode: false
      }
  },
  methods:
  {
      onTrackerItemEdit: function(){
          this.activateEditMode();
        },
        handleBlur: function(){
            this.deactivateEditMode();
        },
        handleEscPressed: function(){
            this.deactivateEditMode();
        },
        handleEnterPressed: function(){
            this.deactivateEditMode();
        },
        activateEditMode: function(){
           this.editMode = true;
           this.$emit('edit-mode-activated');
        },
        deactivateEditMode: function(){
            this.editMode = false;
        }
  }
  

}
</script>


<style scoped>


textarea{
   width: 150px;
   height: 25px;
}

.hidden{
    display:none
}


</style>