<template>
  <div>Home</div>
  <div>store count: {{ store.count }}</div>
  <div>
    <button @click="addCount">添加全局count计数</button>
  </div>
  <hr />
  <div>vuex store count: {{ vuexStore.state.count }}</div>
  <div>
    <button @click="addVuexCount">添加Vuex全局count计数</button>
  </div>
  <div>
    <button @click="toAbout">跳转到About</button>
  </div>
</template>
<script setup lang="ts">
// 也可直接使用导出的router实例
// import router from "@/router";
import store from "@/store-simple";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const vuexStore = useStore();
const addVuexCount = () => {
  vuexStore.commit("increment");
};

// 组合式方式使用 vue-router 插件
const router = useRouter();

const addCount = () => {
  store.addCount();
};
const toAbout = () => {
  router.push({ path: "/about" });
};
</script>
