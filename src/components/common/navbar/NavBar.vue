<template>
    <div class="navbar">
        <div class="left"><slot name="left"></slot> </div>
        <div class="center"><slot name="center"></slot> </div>
        <div class="right"><slot name="right"></slot> </div>
    </div>
</template>
<script>
export default {
    name:'NarBar'
}
</script>

<style scoped>
.navbar{
  display: flex;
  line-height: 44px;
  height: 44px;
}
.right,
.left{
  width: 60px;
  text-align: center;
}
.center{
  flex: 1;
  text-align: center;
}
</style>