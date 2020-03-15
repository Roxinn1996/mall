<template>
  <div id="home">
    <nav-bar class="home-nav-bar"><div slot="center">购物街</div></nav-bar>
    <tab-contorl class="tab-control1" 
                :titles="goodsTitle" 
                @tabClick="tabClick"  
                v-show="istabContorl" 
                ref="tabContorl1"/>

    <scroll class="scroll_box" ref="scroll" 
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll" 
            @pullingUp="loadMore">
        
        <home-swiper :banners="banners" @imgLoda="imgLoda"  ref="test"/>  
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-contorl class="tab-control" :titles="goodsTitle" @tabClick="tabClick"  ref="tabContorl2"/>
        <goods-list :goodslist="showGoods" />
    
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
import {debounce} from '@/common/utils'

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
      istabContorl:false,
      tabContorlY:0,
      saveY:0,
      goodsTitle:[
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
  destroyed(){
    //销毁dom
  },
  activated(){
    console.log('当前活跃')
    //读取保存下来的y值
    this.$refs.scroll.scrollTo(0,this.saveY,0);
    this.$refs.scroll.refresh();
  },
  deactivated(){
    console.log('失去活跃')
    //将现在的y的位置保存下来
    this.saveY = this.$refs.scroll.getScrollY();

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
    tabClick(type,index){
      this.currentType = type;
      this.$refs.tabContorl1.currentIndex  = index;  //这几个很重要，点击得到正确的数值
      this.$refs.tabContorl2.currentIndex  = index;

      // console.log(index)
      
    },
    //返回顶部
    backClick(){
      this.$refs.scroll.scrollTo(0,0);
      
    },
    //监听滚动
    contentScroll(position){
      this.isShowBackTop = (-position.y) > 1000
      this.istabContorl = (-position.y) > this.tabContorlY
    },
    //下拉加载
    loadMore(){
      this.getHomeGoods(this.currentType);
      console.log('加载axios')
    },
    //监听轮播图加载完毕
    imgLoda(){
      this.$refs.scroll.refresh();
      //获取tab 的位置
      this.tabContorlY = this.$refs.tabContorl2.$el.offsetTop;
      // console.log(this.tabContorlY);
    }
  }
}
</script>
<style scoped>
#home{
  height: 100vh;  
}
.home-nav-bar{
  z-index: 9;
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control{
  background-color: #fff;
}
.tab-control{
  position: relative;
  background-color: #fff;
  z-index: 999;
}
.scroll_box{
  overflow-y: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>