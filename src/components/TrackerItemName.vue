<template>
  <span class="tracker-item">
    <span class="itemTitle" v-bind:class="{'hidden':editMode}" v-on:click="handleTextClick"> {{item.title}}</span>
    <input type="text" id="textInput" ref="textEdit"
        v-model="item.title" 
        v-bind:class="{'hidden':!editMode}"
        v-on:blur="handleBlur"
        v-on:keyup.enter="handleEnterPressed"
        v-on:keyup.esc="handleEscPressed" />
  </span>
</template>


<script>


export default {
  name:"TrackerItemName",
    components:{
  },
  props: ["item"],
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


.itemTitle{
   width: 150px;
   height: 25px;
   cursor: pointer;
}

.hidden{
    display:none
}


</style>