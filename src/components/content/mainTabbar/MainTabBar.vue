<template>
    <tab-bar>
        <tab-bar-item link="/home">
            <div slot="img" class="item-img"><img src="@/assets/img/tabbar/home.svg"></div>
             <div slot="img-active" class="item-img"><img src="@/assets/img/tabbar/home_active.svg"></div>
            <div slot="text">首页</div>
        </tab-bar-item>

        <tab-bar-item link="/category">
            <div slot="img" class="item-img"><img src="@/assets/img/tabbar/category.svg"></div>
             <div slot="img-active" class="item-img"><img src="@/assets/img/tabbar/category_active.svg"></div>
            <div slot="text">分类</div>
        </tab-bar-item>

         <tab-bar-item link="/shopcats">
            <div slot="img" class="item-img"><img src="@/assets/img/tabbar/cart.svg"></div>
             <div slot="img-active" class="item-img"><img src="@/assets/img/tabbar/cart_active.svg"></div>
            <div slot="text">购物车</div>
        </tab-bar-item>

         <tab-bar-item link="/profile">
            <div slot="img" class="item-img"><img src="@/assets/img/tabbar/profile.svg"></div>
            <div slot="img-active" class="item-img"><img src="@/assets/img/tabbar/profile_active.svg"></div>
            <div slot="text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'      
import TabBarItem from '@/components/common/tabbar/TabBarItem'    

export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem,
    }
}
</script>

<style scoped>
.item-img img{
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
 

  }

</style>