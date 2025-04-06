<template>
    <LifecycleHooksDemo v-if="flag"> </LifecycleHooksDemo>
  
    <button @click="flag = !flag">创建-销毁</button>
  </template>
  
  <script setup lang="ts">
  import { ref,onBeforeUnmount,onUnmounted } from "vue";
  import LifecycleHooksDemo from "~/components/LifecycleHooksDemo.vue";
  const flag = ref<boolean>(true);
  
  onBeforeUnmount(() => {
    console.log("组件卸载前");
  })
  onUnmounted(() => {
   console.log("组件已卸载");
  })
  </script>
  
  <style>
  </style>