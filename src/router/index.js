import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
import {
  Menu
} from '@/config/config'

Vue.use(VueRouter)


// 从vuerouter里面获取push方法
const originalPush = VueRouter.prototype.push;


// 把菜单多维数组变成一维数组
const tempRouters = Menu.map(ele => {
  return ele.children.map(item => {
    return {
      ...item,
      faKey: ele.key,
      system:ele.system
    }
  })
}).flat();


let routers = [];
// 在每个单独路由里面写上fakey标识
tempRouters.forEach(ele => {
  routes.forEach(item => {
    if (ele.key == item.path.slice(1)) {
      routers.push({
        ...item,
        meta: {
          faKey: ele.faKey,
          system:ele.system
        }
      })
    }
  })
})


routers = [
  ...routers,
  {
    path: '/',
    name: 'redirect',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routers
})

router.beforeEach((to, from, next) => {
  // ...
  next();
})

//此VueRouter是自己自定义引入暴露出来的，即是自定义的，以下的VueRouter同样是这样
// 解决两次访问相同路由地址报错
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router