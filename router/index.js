import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/films/'),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../src/components/HelloWorld.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/order',
      name: 'success',
      component: () => import('../src/components/order.vue'),
      meta: {
        title: '支付成功'
      }
    },
  ]

})
const wrap = () => {
  console.log('执行')
}
router.afterEach((to, from) => {
  wrap()
})

export default router
