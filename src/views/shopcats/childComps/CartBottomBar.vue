<template>
  <div class="bottom-menu">
    <car-list-checked class="select-all" :type-checked="typeChecked" @click.native="checkedAll"/>
    <span>全选</span>
    <span class="total-price">合计: {{totalPrice}}</span>
    <span class="buy-product">去计算({{toCount}})</span>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CarListChecked from './CarListChecked'
  export default {
    name:'CartBottomBar',
    components:{
      CarListChecked,
    },
    computed:{
      ...mapGetters(['cartList']),
      typeChecked(){
        if(this.cartList.length=== 0){return false}
        return !this.cartList.find(item => !item.checked)
      },
      totalPrice(){
        return '¥'+ this.cartList.filter(item => item.checked).reduce((preValue,item)=>{
          return preValue+ item.price*item.count
        },0).toFixed(2)
      },
      toCount(){
        return this.cartList.filter(item=>item.checked).reduce((pre,item)=>{
          return pre+ item.count
        },0)
      }

    },
    methods:{
      checkedAll(){
        if(this.typeChecked){
          //点击全部取消
          this.cartList.forEach(item => item.checked = false);
        }else{
          this.cartList.forEach(item => item.checked = true);

        }
      }
    }
    
  }
</script>

<style scoped>
.bottom-menu{
  position: relative;
  bottom: 0px;
  height: 44px;
  line-height: 44px;
  background-color: #eee;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  font-size: 14px;
  color: #888;
  padding-left: 35px;
}
.buy-product{
  float: right;
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center
}
.total-price{
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}
.select-all{
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}
</style>