import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/login' // 暂定到login 后面加了校验在指向主页。
  },
  {
    path: '/home',
    name: 'layout',
    component: () => import('@/views/layout'),
    redirect:'/home/overview',
    children:[
      {
        path:'/home/overview',
        component: () => import('@/views/overview'),
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/login')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  next()
})

export default router
