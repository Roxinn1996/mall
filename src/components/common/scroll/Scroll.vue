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
       setTimeout(this.refresh, 500)  //延迟500ms刷新一次
      
    },
    methods:{
        //返回顶部
        scrollTo(x,y,time=300){
             this.scroll && this.scroll.scrollTo(x,y,time);
        },
        //重载scroll计算高度
        refresh(){
            this.scroll && this.scroll.refresh();
            console.log('---')

        },
        //下拉重新计算高度
        finishPullUp(){
           this.scroll &&  this.scroll.finishPullUp();
        },
        //获取他当前的y值
        getScrollY(){
            return this.scroll ? this.scroll.y :0
        }
    },
  
}
</script>

<style>

</style>