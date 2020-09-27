<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  components: {},
};
</script>
<style lang="less">
.tabbar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f8f8f8;
  height: 49px;
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  flex-wrap: wrap;
  justify-items: space-between;
}
</style>
