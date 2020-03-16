<template>
  <div class="list-item">
    <!-- {{product}} -->
    <div class="item-selector"><car-list-checked :type-checked="product.checked" @click.native="checkedClick"/></div>
    <div class="item-img"><img :src="product.image"></div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{product.price}}</div>
        <div class="item-count right">X{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CarListChecked from './CarListChecked'
  export default {
    name:'CartListItem',
    props:{
      product:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    components:{
      CarListChecked,
    },
    methods:{
      checkedClick(){
        this.product.checked = !this.product.checked;
      }
    }
  }
</script>

<style scoped>
.list-item{
  position: relative;
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ccc
}
.item-selector{
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img{
  padding: 5px;
}
.item-img img{
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info{
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-desc,
.item-title{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-desc{
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.item-price{
  color: orangered;
}
.info-bottom{
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.left {
    float: left;
}
.right {
    float: right;
}
</style>