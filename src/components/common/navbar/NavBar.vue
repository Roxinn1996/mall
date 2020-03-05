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
  background-color: #f6f6f6;
}
.right,
.left{
  width: 60px;
}
.center{
  flex: 1;
  text-align: center;
}
</style>