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
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            scroll : null,
        }
    },
    mounted(){
        //创建BSscroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            click :true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        })

        //监听滚动
        if(this.probeType == 2 || this.probeType ==3){
          this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
          })
        }

        //监听滚到最底部
        if(this.pullUpLoad){
           this.scroll.on('pullingUp', () => {
              this.$emit('pullingUp'); 
            })
        }
      
    },
    methods:{
        //返回顶部
        scrollTo(x,y,time=300){
             this.scroll && this.scroll.scrollTo(x,y,time);
        },
        //重载scroll计算高度
        refresh(){
            // console.log('---')
            this.scroll && this.scroll.refresh();
        },
        //下拉重新计算高度
        finishPullUp(){
           this.scroll &&  this.scroll.finishPullUp();
        }
    },
  
}
</script>

<style>

</style>