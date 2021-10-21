import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: () => import("@/pages/Home.vue") },
]

const router = createRouter({

    history: createWebHashHistory(),
    routes,
})

export default router;
