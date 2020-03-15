<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">

    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>

    <div class="img">
      <img v-for="item in detailInfo.detailImage[0].list" 
           :src="item" :key="item" @load="loadimg">
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailGoodsInfo',
    props:{
      detailInfo:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    methods:{
      loadimg(){
        this.$emit('loadimg');
      }
    }

  }
</script>

<style scoped>
.detail-goods-info{
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
}
.info-desc {
    padding: 0 15px;
}

.info-desc .start,
.info-desc .end{
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
}

.info-desc .start::before, 
.info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
}

.info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
}

.info-desc .end::after {
    right: 0;
  }

.info-desc .end {
    float: right;
}
.info-key{
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
}
.img img{
  width: 100%;
}
</style>