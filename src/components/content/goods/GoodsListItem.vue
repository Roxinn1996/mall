<template>
    <div class="goods-item" @click="itemClick">
        <img v-lazy="imgshow" @load="imageLoad">
        <div class="goods-info">
            <p>{{goodsitem.title}}</p>
            <span class="price">￥{{goodsitem.price}}</span>
            <span class="collect">{{goodsitem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'GoodsListItem',
    props:{
        goodsitem:{
            type:Object,
            default(){
                return {};
            }
        }
    },
    methods:{
        imageLoad(){
            //事件总线
            if(this.$route.path.indexOf('/home') == 0){
                this.$bus.$emit('itemImageLoad')
            }
            //这是给详情页的
            if(this.$route.path.indexOf('/detail') == 0){
               this.$bus.$emit('loadDetail')
            }
        },
        itemClick(){
            this.$router.push('/detail/'+this.goodsitem.iid)
        }
    },
    computed:{
        imgshow(){
            return this.goodsitem.image || this.goodsitem.show.img 
        }
    }
}
</script>

<style>
.goods-item{
    width: 48%;
    position: relative;
    padding: 2px;
    text-align:center;
}
.goods-item img{
    width: 100%;
    /* height: 220px; */
    border-radius: 5px;

}
.goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
}

  .goods-info .collect {
    position: relative;
}

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>