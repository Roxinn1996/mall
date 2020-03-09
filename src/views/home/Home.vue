<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>


    <scroll class="scroll_box" ref="scroll" 
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll" 
            @pullingUp="loadMore">
        
        <home-swiper :banners="banners" />  
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-contorl class="tab-control" :titles="goodstitle" @tabClick="tabClick" />
        <goods-list :goodslist="showGoods" ></goods-list>
    
    </scroll>

    <back-top @click.native="backClick()"  v-show="isShowBackTop"/>

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
import BackTop from '@/components/content/backTop/BackTop'
import Scroll from '@/components/common/scroll/Scroll'
import {debounce} from '@/common/etils'

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
    BackTop
  },
  data(){
    return{
      banners:[],
      recommends:[],
      currentType:'pop',
      isShowBackTop:false,
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

 
 
  },
  mounted(){
      //监听item图片加载完成
      //使用防抖增加性能，减少refresh调用次数
      const refresh = debounce(this.$refs.scroll.refresh,50) 
      this.$bus.$on('itemImageLoad',()=>{
        // this.$refs.scroll.refresh();
        refresh()
      })

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
        this.goods[type].page += 1
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      })
    },
    //商品类型选择TAB
    tabClick(type){
      this.currentType = type;
    },
    //返回顶部
    backClick(){
      this.$refs.scroll.scrollTo(0,0);
      
    },
    //监听滚动
    contentScroll(position){
      this.isShowBackTop = (-position.y) > 1000
    },
    //下拉加载
    loadMore(){
      this.getHomeGoods(this.currentType);
      console.log('加载axios')
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
  /* height: calc(100% - 93px); */
  height: calc(100% - 49px);
  overflow-y: hidden;
}
</style>