<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-show="!isActive"> <slot name="img"></slot></div>
        <div v-show="isActive"> <slot name="img-active"></slot></div>
        <div :style="isColor"> <slot name="text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        link:String,
        color:{
          type:String,
          default:'red'
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.link) != -1;
        },
        isColor(){
            return this.isActive ? {'color': this.color} : {} 
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.link);
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