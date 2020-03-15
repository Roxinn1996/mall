<template>
  <div class="cat-list">
    <scroll class="scroll-box">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"/>

    </scroll>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Scroll from '@/components/common/scroll/Scroll'

  //子组件
  import CartListItem from './CartListItem'

  export default {
    name:"CartList",
    components:{
      Scroll,
      CartListItem
    },
    computed:{
      ...mapGetters(['cartList'])  
    }
  }
</script>

<style scoped>
.cat-list{
  position: relative;
  height: calc(100% - 44px - 49px);
}
.scroll-box{
  height: 100%;
  overflow: hidden;
}
</style>