<template>
  <div>
    <nav-bar>
     <template #left><a class="back-img" @click="backClick"><img src="@/assets/img/common/back.svg"></a></template>
     <template #center> 我的收货地址 </template>
    </nav-bar>

    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :is-saving='isSaving'
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
  
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'

  import { Toast,AddressEdit  } from 'vant';
  import areaList from "@/assets/js/area.js";
  export default {
    name:'Addedit',
    data() {
      return {
        areaList,
        searchResult: [],
        isSaving:false
      }
    },
    components:{
      [Toast.name]:Toast,
      [AddressEdit.name]:AddressEdit,
      NavBar
    },
    methods:{
      backClick(){
        this.$router.back();
      },
      onSave(content) {
        Toast('save');
        this.isSaving = true;
        console.log(content)
      },
      onDelete() {
        Toast('delete');
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }];
        } else {
          this.searchResult = [];
        }
      }
    }
  }
</script>

<style scoped>
.back-img{
  display: block;
}
.back-img img{
  margin-top: 12px;
}
</style>