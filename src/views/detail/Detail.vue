<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
  </div>
</template>

<script>
//axios
import {getGoodsDetail,Goods,Shop} from '@/network/detail'
//子组件
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'

export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
  data(){
    return{
      iid :null,
      topImages:[],
      goods:{}, //商品详细数据
      shop:{} //商家信息
    }
  },
  created(){
    this.iid = this.$route.params.iid;
    //axios加载数据去
    getGoodsDetail(this.iid).then(suc=>{
      const data = suc.data.result;
      //1.轮播
      this.topImages = data.itemInfo.topImages;
      //2.商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      //3.商家信息
      this.shop = new Shop(data.shopInfo);

    })
  }

}
</script>

<style>

</style>