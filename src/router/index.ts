import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: () => import("@/pages/Home.vue") },
    { path: '/about', component: () => import("@/pages/Home.vue") },
    { path: '/products', component: () => import("@/pages/Home.vue") },
    { path: '/products/:id', component: () => import("@/pages/Home.vue"), alias: "/product/:id" },
    { path: '/account', component: () => import("@/pages/Home.vue") },
    { path: '/orders', component: () => import("@/pages/Home.vue") },
    { path: '/:pathMatch(.*)*', component: () => import("@/pages/NotFound.vue") },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
