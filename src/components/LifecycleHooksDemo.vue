<template>
  <div>
    name:<input v-model="name" />
    <div ref="mountedDom">{{ name }}</div>
  </div>
</template>
  
<script setup lang="ts">
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
const name = ref<string>("fk");
const mountedDom = ref<HTMLElement>() as any;
onBeforeMount(() => {
  console.log("组件挂载前", mountedDom.value);
});
onMounted(() => {
  console.log("组件已挂载", mountedDom.value);
});
onBeforeUpdate(() => {
  console.log("组件更新前",mountedDom.value.innerText);
});
onUpdated(() => {
  console.log("组件已更新",mountedDom.value.innerText);
});
onBeforeUnmount(() => {
  console.log("组件卸载前");
});
onUnmounted(() => {
  console.log("组件已卸载");
});
</script>
  
<style>
</style>