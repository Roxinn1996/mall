<template>
    <div class='tab-control'>
        <div v-for="(item,index) in titles" class="tab-control-item"
        :key="index" 
        :class="{active: index === currentIndex}"    
        @click="isColor(index,item.type)">
            <span>{{item.title}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array
        }
    },
    data(){
        return {
            currentIndex: 0
        }
    },
    methods:{
        isColor(index,type){
            this.currentIndex = index ;
            this.$emit('tabClick',type,index)
        }
    },
}
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    font: 15px;
    line-height: 40px;
    height: 40px;
}
.tab-control-item{
    flex:1;
  
}
.tab-control-item span{
    padding:5px;
}
.active{
    color: var(--color-high-text);
}
.active span{
    border-bottom: 3px solid var(--color-tint);
}
</style>