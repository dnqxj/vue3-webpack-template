<template>
  <div>About</div>
  <div>store count: {{ store.count }}</div>
  <div>
    <button @click="toHome">跳转到About</button>
  </div>
</template>
<script setup lang="ts">
import router from "@/router";
import store from "@/store-simple";

const toHome = () => {
  router.push("/home");
};
</script>
