import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router = new Router({
  // mode: 'history', // history模式下，组件内部的beforeRouteUpdate有问题，直接改动态路由，无法触发
  routes
})

const HAS_LOGINED = true

router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'home' })
    else next()
  }
})

// router.beforeResolve

router.afterEach((to, from) => {
  // 用来关闭页面的loading状态
})

/*
*1.导航被触发
*2.在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
*3.调用全局的前置守卫 beforeEach
*4.在重用的组件里面调用 beforeRouteUpdate
*5.调用路由独享的守卫 beforeEnter
*6.解析异步路由组件
*7.在被激活的组件（即将进入的组件）里调用 beforeRouteEnter
*8.调用全局的解析守卫 beofreResolve
*9.导航被确认
*10.调用全局的后置守卫 afterEach
*11.触发DOM更新
*12.用创建好的实例调用 beofreRouteEnter 守卫里传给next 的回调函数
*/

export default router
