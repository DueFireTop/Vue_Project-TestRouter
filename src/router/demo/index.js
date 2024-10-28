const router = {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/views/Demo/index.vue'),
    redirect: '/demo/home',
    children: [
        {
            path: '/demo/home',
            name: 'DemoHome',
            component: () => import('@/views/Demo/Home/index.vue'),
            meta: {
                show: 0
            }
        },
        {
            path: '/demo/children',
            name: 'DemoChildren',
            component: () => import('@/views/Demo/Children/index.vue'),
            meta: {
                show: 0
            }
        }
    ]
}

export default router;