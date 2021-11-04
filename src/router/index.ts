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
    children: [
      {
        path: "/products",
        name: "products",
        components: {
          products: () => import("@/components/products/Products.vue")
        },
      },
    ]
  },
  {
    path: "/products/:productId",
    name: "product",
    component: () => import("@/pages/Home.vue"),
    alias: "/product/:productId",
    props: route => ({
      productId: Number(route.params.productId)
    }),
  },
  {
    path: "/account/:userId",
    name: "user-account",
    component: () => import("@/pages/Home.vue"),
    props: route => ({
      userId: Number(route.params.userId)
    }),
    children: [
      {
        path: "/account/:userId/orders",
        name: "user-orders",
        components: {
          default: () => import("@/pages/Home.vue"),
          orders: () => import("@/components/orders/Orders.vue")
        },
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
