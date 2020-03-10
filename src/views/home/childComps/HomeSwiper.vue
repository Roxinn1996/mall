<template>
    <div>
        <swiper>  
            <swiper-item v-for="item in banners" :key="item.title">
            <a :href="item.link">
                <img :src="item.image" @load="imgLoda" >
            </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperItem} from '@/components/common/swiper/index'

export default {
    name:'HomeSwiper',
    props:{
        banners:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data(){
        return{
            isimgLoda:false
        }
    },
    methods:{
        imgLoda(){
            if(!this.isimgLoda){
                this.$emit('imgLoda');  
                this.isimgLoda = true;
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style>

</style>