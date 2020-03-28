<template>
  <div id="category">
      <nav-bar class="category-nav-bar"><template #center >商品分类</template></nav-bar>

      <div class="category-box">
        <category-list :category-list-data="categories" @activeClick="activeClick" ref="categoryList"/>


        <div class="category-content">
            <scroll class="content-scroll" ref="scroll">

              <category-menu :category-data="showCategoryData"/>
             
              <tab-control :titles="categoryTitle" @tabClick="tabClick"/>
              <category-goods :categoryData="showGoodsData" />
            </scroll>

        </div> 
    

      </div>  
  </div>
</template>

<script>
//公共组件
import Scroll from '@/components/common/scroll/Scroll'
import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabControl/TabControl'
import {POP,NEW,SELL} from '@/common/const'
//公共方法
import { debounce } from '@/common/utils'

//axios
import {getCatefory,getCateforyData,getCateforyGoods} from '@/network/category'
//子组件
import CategoryList from './childComps/CategoryList'
import CategoryMenu from './childComps/CategoryMenu'
import CategoryGoods from './childComps/CategoryGoods'

export default {
  name: 'Category',
  data(){
    return{
      curIndex:-1,
      curType:POP,
      categories:[], //左侧数据
      categoryData:{},//右侧数据
      categoryTitle:[
        {type:'pop',title:'综合'},
        {type:'new',title:'新品'},
        {type:'sell',title:'销量'},
      ],
    }
  },
  components:{
    Scroll,
    NavBar,
    CategoryList,
    CategoryMenu,
    TabControl,
    CategoryGoods,
  },
  created(){
    this._getCategory();  
  },
  mounted(){
    const loadRefresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on('loadDetailCat',()=>{
      loadRefresh();
    })
    
  },
  activated(){
    this.$refs.scroll.refresh(); //重载一次
  },
  computed:{
    showCategoryData(){
      if(this.curIndex === -1) return {}
      return this.categoryData[this.curIndex].subcategories
    },
    showGoodsData(){
      if(this.curIndex === -1)return []
      return this.categoryData[this.curIndex].categoryDetail[this.curType];
    }
  },
  methods:{
    //分类点击
    activeClick(index){      
      this._subcategories(index);
    },
    //tab点击
    tabClick(type,index){
      this.curType = type;
    },
    //获取左侧数据，初始化右侧结构
    _getCategory(){
      getCatefory().then(suc=>{
        // 1.获取分类数据
        this.categories = suc.data.data.category.list;
        //2.初始化每个类别的子数据
        for( let i =0 ;i <this.categories.length;i++){    
          this.categoryData[i] = {
            subcategories : {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        this._subcategories(0)
      })
    },
    _subcategories(index){
      this.curIndex = index;
      const maitKey = this.categories[index].maitKey;
      if(Object.keys(this.categoryData[index].subcategories).length === 0){
        getCateforyData(maitKey).then(suc=>{
          this.categoryData[index].subcategories = suc.data;  //数组索引增删改数据，不是响应式的   
          this.categoryData = {...this.categoryData};  //重要的是对象的指向改变,vue内部会自动循环数据，添加响应式
          this._getCateforyGoods('pop')
          this._getCateforyGoods('new')
          this._getCateforyGoods('sell')
        })
      }
    },
    _getCateforyGoods(type){
      const miniWallkey = this.categories[this.curIndex].miniWallkey;
      getCateforyGoods(miniWallkey,type).then(suc=>{
        this.categoryData[this.curIndex].categoryDetail[type] = suc.data;
        this.categoryData= {...this.categoryData}  
      })
    },
    
   
  }

}
</script>

<style>
#category{
  height: 100vh;
}
.category-nav-bar{
  position: relative;
  z-index: 9;
  background-color: var(--color-tint);
  color: #fff;
}
.category-box{
  display: flex;
  height: calc(100% - 44px - 49px);
  width: 100%;
}

.category-content{
    position: relative;
    /* background-color: #410909; */
    width: calc(100% - 100px );
    box-sizing: border-box;
    overflow: hidden;
}
.content-scroll{
  height: 100%;
  overflow: hidden;
}
</style>
