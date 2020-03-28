<template>
  <div id="profile">
      <nav-bar class="profile-nav-bar"><template #center >个人信息</template></nav-bar>
      <profile-info/> 
      <profil-address @click.native="dizhiClick"/>
  </div>
</template>

<script>
//公共组件
import NavBar from '@/components/common/navbar/NavBar'
//子组件
import profileInfo from './childComps/profileInfo'
import profilAddress from './childComps/profilAddress'

export default {
  name: 'Profile',
  components: {
    NavBar,
    profileInfo,
    profilAddress
  },
  methods:{
    dizhiClick(){
      this.$router.push('/address')
    }

  }
}
</script>
<style scoped>
.profile-nav-bar{
  position: relative;
  z-index: 9;
  background-color: var(--color-tint);
  color: #fff;
}
</style>
