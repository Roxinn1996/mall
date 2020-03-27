<template>
  <scroll class="category-scroll" ref='barScroll'>
     <div class="category-list">
        <div class="menu-list-item" 
            v-for="(item,index) in categoryListData" 
            :key="item.title" 
            :class="{active:curIndex===index}" 
            @click="activeClick(index)">{{item.title}}
        </div>
     </div>
  </scroll>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'
  export default {
    name:'CategoryList',
    data(){
      return{
        curIndex:0
      }
    },
    props:{
      categoryListData:{
        type:Array,
        default(){
          return[]
        }
      }
    },   
    mounted(){
      setTimeout(()=>{
        this.$refs.barScroll.refresh()
      },300)
    },
    components:{
      Scroll
    },
    methods:{
      activeClick(index){
        if(this.curIndex != index){
           this.curIndex = index;
           this.$emit('activeClick',index);
        }
       
      }
    }
  
  }
</script>

<style scoped>
.category-scroll{
  position: relative;
}
.category-list{
    background-color: #f6f6f6;
    height: 100%;
    width: 100px;
}
.menu-list-item{
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}
.active{
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}


</style>