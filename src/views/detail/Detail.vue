<template>
  <div id="detail">
    <detail-nav-bar/>
  </div>
</template>

<script>
//axios
import {getGoodsDetail} from '@/network/detail'
//子组件
import DetailNavBar from './childComps/DetailNavBar'

export default {
  name:'Detail',
  components:{
    DetailNavBar,
  },
  data(){
    return{
      iid :null,
      goodsDetilData:{}
    }
  },
  created(){
    this.iid = this.$route.params.iid;
    //axios加载数据去
    getGoodsDetail(this.iid).then(suc=>{
      this.goodsDetilData = suc.data.result;
      console.log(this.goodsDetilData)
    })
  },

}
</script>

<style>

</style>