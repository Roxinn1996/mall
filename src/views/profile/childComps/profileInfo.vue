<template>
  <div class="profile-info">
    <a class="user-img">
      <slot name="user-img">
       <img src="@/assets/img/common/top.png">
      </slot>
    </a>
    <div class="user-nickname">
      <slot name="user-nickname"><div>登陆/注册</div></slot>
      <div> 
        <slot>暂无绑定手机号</slot>
      </div>
    </div>

    <a class="user-from">> </a>
  </div>
</template>

<script>
  export default {
    name:'profileInfo',
  }
</script>

<style scoped>
.profile-info{
  background-color: var(--color-tint);
  padding: 15px;
  margin-top: -5px;
  display: flex;
}

.user-img{
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 30px;
  display: block;
  position: relative;
}
.user-img img{
  width: 100%;
}

.user-nickname{
  color: #fff;
  margin: 10px 0 0 10px;
}
.user-from{
  position: absolute;
  right: 15px;
  /* top: 63%; */
  transform: translate(-50%, 50%);
  font-size: 21px;
  color: #fff;
}
</style>