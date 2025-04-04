<template>
  <div>obj: {{ obj }}</div>
  fknName：<input v-model="fknName" />
  <br />
  name：<input v-model="name" />
  <br />
  age：<input v-model="age" />
  <br />
  <button @click="toRawFun">toRaw</button>
</template>
  
  <script setup lang="ts">
import { toRef, reactive, toRefs, toRaw } from "vue";

const obj: any = reactive({
  name: "fk",
  age: 18,
});
//toRef将响应式对象中的属性转换为ref对象，这样就可以直接使用ref对象了
const fknName = toRef(obj, "name");

// toRefs仿写 将响应式对象中的所有属性转换为ref对象，这样就可以直接使用ref对象了
const myToRefsFun = <T extends object>(object: T) => {
  const map: any = {};
  for (const key in obj) {
    map[key] = toRef(obj, key);
  }
  return map;
};

// const {name,age} = myToRefsFun(obj)
const { name, age } = toRefs(obj);
console.log(name, age);

const toRawFun = () => {
  console.log(toRaw(obj));
};
</script>
  
  <style>
</style>