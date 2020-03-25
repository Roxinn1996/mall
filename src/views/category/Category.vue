<template>
  <div id="category">
      <nav-bar class="category-nav-bar"><template #center >商品分类</template></nav-bar>

      <div class="category-box">
        <category-list :category-list-data="categoryListData"/>
       
        <div class="category-item"></div> 
      </div>  
  </div>
</template>

<script>
//公共组件
import Scroll from '@/components/common/scroll/Scroll'
import NavBar from '@/components/common/navbar/NavBar'
//axios
import {getCatefory,getCateforyData} from '@/network/category'
//子组件
import CategoryList from './childComps/CategoryList'

export default {
  name: 'Category',
  data(){
    return{
      categoryListData:[]
    }
  },
  components:{
    Scroll,
    NavBar,
    CategoryList
  },
  created(){
    //左侧数据
    getCatefory().then(suc=>{
      this.categoryListData = suc.data.data.category.list;
      console.log(this.categoryListData);
    })
  }
}
</script>

<style>
#category{
  height: 100vh;
}
.category-nav-bar{
   z-index: 9;
  background-color: var(--color-tint);
  color: #fff;
}
.category-box{
  display: flex;
  height: calc(100% - 44px - 49px);
  width: 100%;
}

.category-item{
    background-color: #410909;
    width: calc(100% - 100px );
    box-sizing: border-box;
}
</style>
