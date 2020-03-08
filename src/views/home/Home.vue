<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>


    <scroll class="scroll_box" ref="scroll">
        
        <home-swiper :banners="banners" />
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-contorl class="tab-control" :titles="goodstitle" @tabClick="tabClick" />
        <goods-list :goodslist="showGoods" ></goods-list>
    
    </scroll>

  </div>
</template>

<script>
//axios
import {getHomeMultidata,getHomeGoods} from '@/network/home'
//子组件
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

//公共
import NavBar from '@/components/common/navbar/NavBar'
import TabContorl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'


import Scroll from '@/components/common/scroll/Scroll'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabContorl,
    GoodsList,
    Scroll,
  },
  data(){
    return{
      banners:[],
      recommends:[],
      currentType:'pop',
      goodstitle:[
        {type:'pop',title:'流行'},
        {type:'new',title:'新款'},
        {type:'sell',title:'精选'},
      ],
      goods:{
        'pop' : {page:0,list:[]},
        'new' : {page:0,list:[]},
        'sell' : {page:0,list:[]}
      }
    }
  },
  created(){
    //轮播，推荐
    this.getHomeMultidata();
    //分类商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
    //监听item图片加载完成
    this.$bus.$on('itemImageLoad',()=>{
      this.$refs.scroll.refresh();
    })
 
 
  },
  mounted(){
       console.log(this.$refs.scroll)
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods:{
    
     //轮播，推荐
    getHomeMultidata(){
       getHomeMultidata().then(suc=>{
        this.banners =suc.data.data.banner.list;
        this.recommends =suc.data.data.recommend.list;
      })
    },
    //分类商品数据
    getHomeGoods(type){
      const pages  = this.goods[type].page + 1;
       getHomeGoods(type,pages).then(suc=>{
        this.goods[type].list.push(...suc.data.data.list);
        this.goods[type].page  =pages ;
      })
    },
    tabClick(type){
      this.currentType = type;
    }
  }
}
</script>
<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
  
}
.nav-bar{
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tab-control{
  /* 兼容性很差 */
  background-color: #fff;
  z-index: 999;
  position: sticky; 
  top: 44px;
}

.scroll_box{
  height: calc(100% - 93px);
  overflow-y: hidden;
}
</style>