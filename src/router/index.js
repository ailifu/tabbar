import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../views/home/Home.vue');
const Cart = () => import('../views/cart/Cart.vue');
const List = () => import('../views/list/List.vue');
const Profile = () => import('../views/profile/Profile.vue');
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: "/home",
  },
  {
    path: '/cart',
    component: Cart,
  }, {
    path: '/home',
    component: Home,
  },
  {
    path: '/list',
    component: List,
  },
  {
    path: '/profile',
    component: Profile,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
