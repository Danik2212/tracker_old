<template>
  <span class="tracker-item">
    <span class="item-score"> {{item.goodCount}} / {{item.goodCount+item.badCount}} 
        ({{  item.goodCount / (item.goodCount+item.badCount) | percentage }}%) </span>
  </span>
</template>


<script>


export default {
  name:"TrackerItemScore",
    components:{
  },
  props: ["item"],
  filters: {
    percentage: function (value) {
        if (!value) return 0;
        value = (value * 100).toFixed(0);
        return value;
    }
}

}
</script>


<style scoped>
    .item-score{
        width: 130px;
    }
</style>