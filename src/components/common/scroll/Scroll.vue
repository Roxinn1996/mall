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
            pullUpLoad:true
        })

        //监听滚动
        if(this.probeType == 2 || this.probeType ==3){
          this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
          })
        }

        //监听滚到最底部
        // this.scroll.on('pullingUp',()=>{
        //   // console.log(down);
        // })
        this.scroll.on('pullingUp', () => {
          // console.log('到底');
          this.$emit('pullingUp');
        })
    },
    methods:{
        //返回顶部
        scrollTo(x,y,time=300){
             this.scroll && this.scroll.scrollTo(x,y,time);
        },
        //重载scroll计算高度
        refresh(){
            this.scroll && this.scroll.refresh();
        },
      
    },
  
}
</script>

<style>

</style>