import { createRouter, createWebHashHistory } from "vue-router";

// 定义路由组件
const HomeIndex = () => import("@/features/home/presentation/HomeIndex.vue");
const AboutIndex = () => import("@/features/about/presentation/AboutIndex.vue");
const HNodes = () => import("@/features/hnodes/presentation/HNodes");
const NotFound = () => import("@/features/NotFound.vue");

// 2、定义一些路由
// 每个路由都需要映射一个组件
const routes = [
  { path: "/", component: HomeIndex },
  { path: "/home", component: HomeIndex },
  { path: "/about", component: AboutIndex },
  { path: "/hnodes", component: HNodes },
  { path: "/404", component: NotFound }
];

// 3、创建路由示例并传递 `routes` 配置
// 你可以在这里输入更多的配置
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
