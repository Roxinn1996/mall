<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>



<script>
import BScroll from 'better-scroll'  //滚动
export default {
    name:'Scroll',
    data(){
        return {
            scroll : null,
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click :true,
            probeType:3
        })
        
        // console.log(this.scroll)
    },
    methods:{
        refresh(){
            this.scroll.refresh();
        },
        hahaha(){

        }
    },
    computed:{
        gungungun(){

        }
    }
}
</script>

<style>
.wrapper{
    
}

</style>