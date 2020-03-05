<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>  
</template>

<script>
export default {
    name:"RecommendView",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{

    }
}
</script>

<style>
.recommend{
    display: flex;
    width: 100%;
    padding: 10px 0 20px 0;
    font-size: 12px;
    border-bottom: 10px solid #eee

}
.recommend-item{
    flex: 1;
    text-align: center;
}

.recommend-item img{
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
}
  
</style>