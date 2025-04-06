<!-- Child.vue -->
<script setup>
const model = defineModel();

const update = () => {
  model.value++;
};
</script>

<template>
  <div>
    <div>child-model is: {{ model }}</div>
    <button @click="update">Increment</button>
  </div>
</template>