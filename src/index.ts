import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 创建并挂载根实例
const app = createApp(App);
// 确保 __use__ 路由实例使
// 整个应用支持路由
app.use(router);
// 将 store 实例作为插件安装
app.use(store);

app.mount("#root");

app.config.errorHandler = (err) => {
  /* 处理错误 */
  console.error("全局未捕获错误", err);
};
