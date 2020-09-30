<template>
  <div class="tracker-item">
    <RemoveButton v-on:remove="handleRemoveItem"/>
    <TrackerItemName v-bind:item="item"/>
    <GoodButton v-on:add-good="handleAddGood"/>
    <BadButton v-on:add-bad="handleAddBad"/>
  </div>
</template>


<script>


import TrackerItemName from "./TrackerItemName.vue"
import GoodButton from "./general/GoodButton.vue"
import BadButton from "./general/BadButton.vue"
import RemoveButton from "./general/RemoveButton.vue"

export default {
  name:"TrackerItem",
  components:{
    TrackerItemName,
    GoodButton,
    BadButton,
    RemoveButton
  },
  props: ["item"],
  methods:{
    handleRemoveItem: function(){
      this.$emit( 'remove', this.item.id );
    },
    handleAddGood: function(){
      this.$emit( 'add-good', this.item.id );
    },
    handleAddBad: function(){
      this.$emit( 'add-bad', this.item.id );
    }
  }

}
</script>


<style scoped>

  .tracker-item{
    background: #f4f4f4;
    padding-left: 10px;
    border-bottom: 1px #ccc dotted;
  }

</style>