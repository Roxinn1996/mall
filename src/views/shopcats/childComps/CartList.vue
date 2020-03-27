<template>
  <div class="cat-list">
    <scroll class="scroll-box" ref="scroll">
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
    },
    activated(){
      // console.log('你爹来了')
      this.$refs.scroll.refresh();
    }
  }
</script>

<style scoped>
.cat-list{
  position: relative;
  height: calc(100% - 44px - 49px - 44px);
}
.scroll-box{
  height: 100%;
  overflow: hidden;
}
</style>