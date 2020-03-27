<template>
  <div class="category-menu" v-if="Object.keys(categoryData).length !== 0"> 
      <div class="menu-item" v-for="(item,index) in categoryData.data.list" :key="index">
        <a><img :src="item.image"></a>
        <p>{{item.title}}</p>
      </div>
  </div>
</template>

<script>
  export default {
    name:'CategoryMenu',
    props:{
      categoryData:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.category-menu{
  display: flex;
  flex-wrap:wrap;
  padding: 20px 8px;
}
.menu-item{
  text-align: center;
  font-size: 12px;
  box-sizing: content-box;
  width: 33%;
  /* flex: 1; */
}
.menu-item img{
  width: 80%;
}
.menu-item p{
  margin-top: 10px;
}
</style>