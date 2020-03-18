<template>
  <div id="detail">
    <detail-nav-bar @detailTabClik="detailTabClik" ref="navbar"/>

    <scroll class="scroll-box" ref="scroll" @scroll="scroll" :probe-type="3">
        <detail-swiper :top-images="topImages"/>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-goods-info :detail-info="detailInfo" @loadimg="loadimg"/>
        <detail-param-info :item-params="itemParams" ref="param" />
        <detail-comment-info :comment-info="commentInfo" ref="comment" />
        <goods-list :goodslist="recommendList" ref="goods"/>
    </scroll>

    <detail-bottom-bar @addCart="addCarts"/>
  </div>
</template>

<script>
import { mapActions} from 'vuex'
//axios
import {getGoodsDetail,Goods,Shop,GoodsParam,getRecommend} from '@/network/detail'
//公共
import GoodsList from '@/components/content/goods/GoodsList'
import Scroll from '@/components/common/scroll/Scroll'
import {debounce} from '@/common/utils'

//子组件
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'


export default {
  name:'Detail',
  components:{
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  data(){
    return{
      iid :null,
      topImages:[],
      goods:{}, //商品详细数据
      shop:{}, //商家信息
      detailInfo:{}, //商品介绍，模特图片
      itemParams:{}, //尺码
      commentInfo:{}, //评论
      recommendList:[], //推荐数据
      getThemTopY:null,
      loadRefresh:null,
      themeTopYs:[], //导航对应div所在高度
      currentIndex:null,
    }
  },
  created(){
    this.iid = this.$route.params.iid;
    //axios加载商品数据
    getGoodsDetail(this.iid).then(suc=>{
      const data = suc.data.result;
      //1.轮播
      this.topImages = data.itemInfo.topImages;
      //2.商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      //3.商家信息
      this.shop = new Shop(data.shopInfo);
      //4.保存商品的详情数据
      this.detailInfo = data.detailInfo;
      //5.尺码
      this.itemParams = new GoodsParam(data.itemParams.info,data.itemParams.rule);
      //6.评论
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0];
      }
      //给获取用防抖
     
      this.getThemTopY = debounce(()=>{
        this.themeTopYs =[];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.param.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.goods.$el.offsetTop);
        this.themeTopYs.push(this.$refs.goods.$el.offsetTop+ this.$refs.goods.$el.offsetHeight);
      },100)

     
      //获取导航对应的div top
      // this.$nextTick(() =>{
      //   //这样写的话只是保证了dom渲染出来了，但是不能保证图片加载完
      //   this.themeTopYs =[];
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.goods.$el.offsetTop);
      //   console.log(this.themeTopYs);
      // })
    })
    //加载推荐数据
    getRecommend().then(suc=>{
      this.recommendList = suc.data.data.list
    })
  },
  mounted(){
    this.loadRefresh = debounce(this.$refs.scroll.refresh,50);
    // const refresh = debounce(this.$refs.scroll.refresh,50)  //old
    this.$bus.$on('loadDetail',()=>{
      // refresh(); //old
      this.loadRefresh();
      this.getThemTopY();
    })

  
    
  },
  methods:{
    ...mapActions(['addCart']),
    loadimg(){
      // debounce(this.$refs.scroll.refresh,50)()
      // this.$refs.scroll.refresh();
      this.loadRefresh();
    },
    detailTabClik(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],500);
    },
    scroll(position){
      const positionY = -position.y;
      for(let i =0; i< this.themeTopYs.length -1;i++){
        if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) ){
          this.currentIndex =i;
          this.$refs.navbar.currIndex = this.currentIndex;
        }
      }
    },
    addCarts(){
      const product ={}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      product.count = 1;
      product.checked = true;
      //每次加入购物车，购物车的scroll 的高度就要计算一次,有个办法，就是在进入购物车时候，使用生命周期函数，去重新获取一次scroll高度
     ////常规使用
     // this.$store.commit('addCart',product);
      // this.$store.dispatch('addCart',product).then(suc=>{
      //   this.$notify({
      //     // title: '成功',
      //     message: suc,
      //     type: 'success',
      //     position: 'bottom-right',
      //     offset: 100
      //   });
      // })

      //花里胡哨
      this.addCart(product).then(suc=>{
        this.$notify({
          // title: '成功',
          message: suc,
          type: 'success',
          position: 'bottom-right',
          offset: 100
        });
      })
     
    }
  }

}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
}
.scroll-box{
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  overflow-y: hidden;
 bottom: 0;
}
</style>