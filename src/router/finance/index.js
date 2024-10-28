const router = {
    path: '/finance',
    name: 'Finance',
    component: () => import('@/views/Finance/index.vue'),
    redirect: '/finance/home',
    children: [
        {
            path: '/finance/home',
            name: 'FinanceHome',
            component: () => import('@/views/Finance/Home/index.vue'),
            meta: {
                show: 0
            }
        },
        {
            path: '/finance/capital',
            name: 'FinanceCapital',
            component: () => import('@/views/Finance/Capital/index.vue'),
            meta: {
                show: 0
            }
        }
    ]
}

export default router;