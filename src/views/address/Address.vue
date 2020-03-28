<template>
  <div>
    <nav-bar>
      <template #left><a class="back-img" @click="backClick"><img src="@/assets/img/common/back.svg"></a></template>
      <template #center> 我的收货地址 </template>
      <template #right>
                <a class="add" @click="addClick">添加</a> 
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import {huiben} from '@/network/request'
  export default {
    name:'Address',
    components:{
      NavBar
    },
    methods:{
      backClick(){
        this.$router.back();
      },
      addClick(){
        this.$router.push('/addedit')
      }
      
    },
    created(){
      huiben({
        url:'/api/huiben/getdata'
      }).then(res=>{
        console.log(res);
      })
    }
  }
</script>

<style scoped>
.add,
.back-img{
  display: block;
}
.back-img img{
  margin-top: 12px;
}
</style>