<template>
    <div>
      <!-- reactive, readonly -->
      <!-- {{ from }} -->
      <!-- <input v-model="from.name">
      <br>
      <input v-model="from.age">
      <br>
      <p>{{ readonlyFrom }}</p>
      <button @click="submitFun">提交</button> -->
  
      <!-- shallowReactive -->
      <p>reactive：{{ from }}</p>
      <p>shallowReactive：{{ shallowReactiveFrom }}</p>
      <button @click="changeShallowReactiveFrom">提交</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive, readonly, shallowReactive } from "vue";
  type M = { name: string; age: number };
  const from = reactive<M>({
    name: "fk",
    age: 18,
  });
  const readonlyFrom = readonly(from);
  const submitFun = () => {
    // readonlyFrom.name = '123'
    // readonly是只读的，不能修改，但是修改from的属性，readonlyFrom也会跟着改变
    from.age = 18;
    console.log(readonlyFrom);
    console.log(from);
  };
  
  const shallowReactiveFrom = shallowReactive({
    name: "kf",
    age: {
      num: 28,
    },
  });
  const changeShallowReactiveFrom = () => {
    // shallowReactiveFrom.age.num = 18;
    //不会触发响应式更新视图，因为shallowReactiveFrom是浅响应式，只会对第一层进行响应式
    // from.age = 28;
    //和shallowRef一样，修改了from的属性，shallowReactiveFrom也会跟着改变
  
    shallowReactiveFrom.age={num:18}
    //会触发响应式更新视图
    console.log(shallowReactiveFrom); 
  }
  </script>
  
  <style></style>