<template>
  
  <div>
    <!-- <div>Parent-model is: {{ countModel }}</div>
    <Child v-model="countModel" /> -->
    <div>
        <slot name="header"></slot>
        <slot></slot>
 
        <slot name="footer"></slot>
    </div>
  </div>

</template>

<script setup>
import Child from "./components/Child.vue";
import componentsDemo2 from "./components/componentsDemo2.vue";
import { ref } from "vue";
const countModel = ref(1);
</script>

<style>

</style>