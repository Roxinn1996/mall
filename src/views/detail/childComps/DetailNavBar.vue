<template>
  <div id="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="detail-img" @click="backClick"><img src="@/assets/img/common/back.svg"></div>
      <div slot="center" class="detail-center">
          <div class="detail-item" 
                v-for="(item,index) in titles" :key="item" 
                @click="itemClick(index)"
                :class="{isactive:currIndex === index}" >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>


import NavBar from '@/components/common/navbar/NavBar'

export default {
  name:'DetailNavBar',
  components:{
    NavBar,
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currIndex:0
    }
  },
  methods:{
    //tab切换
    itemClick(index){
      this.currIndex =index;
    },
    //返回
    backClick(){
      this.$router.back()
    }
  }
 


}
</script>

<style scoped>
.detail-center{
  display: flex;
}
.detail-item{
  flex: 1;
}
.detail-img img{
  margin-top: 10px;
}
.isactive{
  color:var(--color-high-text);
}
</style>