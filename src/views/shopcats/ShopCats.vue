<template>
  <div id="shopcats">
    <nav-bar class="cats-title">
      <template #center>购物车({{cartLength}})</template>
    </nav-bar>

    <cart-list/>
    <cart-bottom-bar/>

  </div>
</template>

<script>

//公共
import NavBar from '@/components/common/navbar/NavBar'
//子组件
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

export default {
  name: 'ShopCats',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
    //头部购物车数量
    cartLength(){
      return this.$store.getters.length;
    }
  }
}
</script>

<style scoped>
#shopcats{
  height: 100vh;
  position: relative;
}
.cats-title{
  background-color: var(--color-tint);
  color: #fff;
}
</style>