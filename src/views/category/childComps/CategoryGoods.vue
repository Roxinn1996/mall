<template>
  <div class="goods-content">
    <goods-list :goodslist="categoryData"></goods-list>
  </div>
</template>

<script>
import GoodsList from '@/components/content/goods/GoodsList'
  export default {
    name:'CategoryGoods',
    props:{
      categoryData:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      GoodsList,
    }
  }
</script>

<style scoped>

</style>