import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/classificationView.vue"),
  },
  {
    path: '/test-management',
    name: 'TestManagement',
    component: () => import("@/views/TestManagement.vue"),
  },
  {
    path: '/test-management-detail',
    name: 'TestManagementDetail',
    component: () => import("@/views/TestManagementDetail.vue"),
    props: true,
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
