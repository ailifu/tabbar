<template>
  <div id="app">
    <router-view />
    <Tabbar>
      <Tabbaritem link="/home">
        <img slot="tabbarico" src="../src/assets/img/home.svg" alt="" />
        <img slot="tabbarico-active" src="../src/assets/img/home-active.svg" alt="" />
        <div  slot="tabbartext">首页</div>
      </Tabbaritem>
      <Tabbaritem link="/list">
        <img slot="tabbarico" src="../src/assets/img/list.svg" alt="" />
        <img slot="tabbarico-active"  src="../src/assets/img/list-active.svg" alt="" />
        <div slot="tabbartext">产品</div>
      </Tabbaritem>
      <Tabbaritem link="/cart">
        <img slot="tabbarico" src="../src/assets/img/cart.svg" alt="" />
        <img slot="tabbarico-active" src="../src/assets/img/cart-active.svg" alt="" />
        <div  slot="tabbartext">购物车</div>
      </Tabbaritem>
      <Tabbaritem link="/profile">
        <img slot="tabbarico" src="../src/assets/img/profile.svg" alt="" />
        <img slot="tabbarico-active" src="../src/assets/img/profile-active.svg" alt="" />
        <div  slot="tabbartext">我的</div>
      </Tabbaritem>
    </Tabbar>
  </div>
</template>
<script>
import Tabbar from './components/tabbar/Tabbar';
import Tabbaritem from './components/tabbar/Tarbar-item';
export default {
  name: 'App',
  components: {
    Tabbar,
    Tabbaritem,
  },
};
</script>
<style lang="less">
@import url('../src/assets/css/base.css');
</style>
