<template>
  <a href="#/">Home</a>
  <a href="#/about">About</a>
  <component :is="currentView" />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import HomeIndex from "@/features/home/presentation/HomeIndex.vue";
import AboutIndex from "@/features/about/presentation/AboutIndex.vue";
import NotFound from "@/features/NotFound.vue";

const routes = {
  "/": HomeIndex,
  "/about": AboutIndex
};
const currentPath = ref(window.location.hash);
window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});
const currentView = computed(() => {
  // @ts-ignore
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});
</script>
<!-- 不需使用vue-router插件实现路由 -->
