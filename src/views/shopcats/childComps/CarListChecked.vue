<template>
  <div class="icon-selector" :class="{iscolor:typeChecked}" >
    <img src="@/assets/img/cart/tick.svg">
  </div>
</template>

<script>
  export default {
    name:'CarListChecked',
    props:{
      typeChecked:{
        type:Boolean,
        default:true
      }
    },
 
  }
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }
  .iscolor{
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>