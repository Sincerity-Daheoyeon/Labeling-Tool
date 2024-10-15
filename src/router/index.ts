import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/classificationView.vue"),
  },
  {
    path: '/test-management',  // 새로운 URL 경로
    name: 'TestManagement',
    component: () => import("@/views/TestManagement.vue"),
  },
  {
    path: '/layouts/AdminDefaultLayouts',
    name: 'AdminManagement',
    component: () => import("@/layouts/AdminDefaultLayout.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
