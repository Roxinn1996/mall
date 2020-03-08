<template>
    <div id="tab-bar">
        <slot></slot>
    </div>  
</template>

<script>
export default {
    name:"TabBar"
}
</script>
<style scoped>

  #tab-bar{
    display:flex;
    position: fixed;
    z-index: 999;
    height: 49px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f6f6f6;
    border-top: 1px solid #eee;
    box-shadow: 0px -1px 1px rgba(150,150,150,.08);
  }

</style>