<template>
  <div id="app">
      <main-tab-bar></main-tab-bar>
    <router-view/>
  </div>
</template>
<script>
import MainTabBar from '@/components/content/mainTabbar/MainTabBar.vue'
export default {
    name:'App',
    components:{
        MainTabBar,
    }
}
</script>


<style>

  
</style>
