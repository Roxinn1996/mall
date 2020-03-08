<template>
    <div class="goods">
        <goods-list-item v-for="item in goodslist" :key="item.title" :goodsitem="item"/>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    name:'GoodsList',
    props:{
        goodslist:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodsListItem,
    }
}
</script>

<style>
.goods{
    display: flex;
    flex-wrap:wrap;
    position: relative;
    padding-bottom: 60px;
    justify-content:space-around--
}
</style>