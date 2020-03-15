<template>
  <div class="detail-param-info" v-if="Object.keys(itemParams).length !== 0">

      <table class="info-size"  v-for="(item,index) in itemParams.sizes" :key="index" >
        <tr v-for="(tr,indey) in item" :key="indey">
          <td v-for="(td,indez) in tr" :key="indez"> 
            {{td}}
          </td>
        </tr>
      </table>

      <table class="info-param">
        <tr v-for="(item,index) in itemParams.infos" :key="index">
          <td class="info-param-key">{{item.key}}</td>
          <td class="param-value">{{item.value}}</td>
        </tr>
      </table>

      <div class="info-img" v-if="itemParams.image.length !== 0">
        <img :src="itemParams.image[0]" alt="">
      </div>

  </div>
</template>

<script>
  export default {
    name:'DetailParamInfo',
    props:{
      itemParams:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.detail-param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
}
.detail-param-info table tr {
    height: 42px;
}
.info-size{
  width: 100%;
  border-collapse: collapse;
}
.detail-param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
}

/* 信息 */
.info-param{
    width: 100%;
    border-collapse: collapse;
}

.info-param-key{
    width: 95px;
}
.param-value{
    color: #eb4868;
}
</style>