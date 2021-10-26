import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "home", component: () => import("@/pages/Home.vue") },
  {
    path: "/about",
    name: "about",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/products/:productId",
    name: "product",
    component: () => import("@/pages/Home.vue"),
    alias: "/product/:productId",
    props: true,
  },
  {
    path: "/account/:userId",
    name: "user-account",
    component: () => import("@/pages/Home.vue"),
    props: true,
    children: [
      {
        path: "/account/:userId/orders",
        name: "user-orders",
        components: {
          default: () => import("@/pages/Home.vue"),
          orders: () => import("@/components/orders/Orders.vue")
        },
        props: true,
      },
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
