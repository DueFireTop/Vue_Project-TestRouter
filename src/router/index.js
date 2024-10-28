import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
import FinanceRouter from './finance/index'
import DemoRouter from './demo/index'

Vue.use(VueRouter) // 全局注册

const routes = [
    // {
    //     path: '/404',
    //     name: '404',
    //     component: () => import('@/views/404.vue')
    // },
    // {
    //     path: '*',
    //     redirect: '/404'
    // },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/',
        redirect: '/home'
    },
    
]

routes.push(FinanceRouter)
routes.push(DemoRouter)

const router = new VueRouter({
    routes
})

export default router