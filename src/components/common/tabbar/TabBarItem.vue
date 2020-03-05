<template>
    <div class="tab-bar-item" @click="itemClick">
        <div class="item-icon" v-show="!isActive"> <slot name="img"></slot></div>
        <div class="item-icon" v-show="isActive"> <slot name="img-active"></slot></div>
        <div class="item-text" :style="isColor"> <slot name="text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        link:String,
        color:String,
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.link) != -1;
        },
        isColor(){
            return this.isActive ? {'color': this.color ? this.color:'#ff5777'} : {} 
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.link);
        }
    }
}
</script>

<style scoped>
.tab-bar-item{
    flex: 1;
    text-align: center;

  }

</style>