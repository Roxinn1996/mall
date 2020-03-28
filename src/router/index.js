import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/home/Home.vue');
const Category = () => import('@/views/category/Category.vue');
const Profile = () => import('@/views/profile/Profile.vue');
const ShopCats = () => import('@/views/shopcats/ShopCats.vue');
const Detail = ()=>import('@/views/detail/Detail.vue');
const Address =() => import('@/views/address/Address.vue')
const Addedit = ()=>import('@/views/address/Addedit.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/ShopCats',
    name: 'ShopCats',
    component: ShopCats
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/address',
    name: 'Address',
    component: Address,
  },
  {
    path: '/addedit',
    name: 'Addedit',
    component: Addedit
  },
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
