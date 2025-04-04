<template>
    <!-- <div>
      newValue:<input v-model="newValue" /><br />
      oldValueList:
      <ul>
        <li v-for="item in oldValueList">
          {{ item }}
        </li>
      </ul>
      <br />
      <button @click="newValue = 'fk'">change</button>
    </div> -->
  
    <div id="obj">
      obj: {{ obj }}<br />
      obj.name: <input v-model="obj.name" /><br />
      obj.age: <input v-model="obj.age" /><br />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive, watch, watchEffect } from "vue";
  const newValue = ref<string>("");
  const oldValueList = ref<[]>([]);
  watch(newValue, (newValue, oldValue) => {
    oldValueList.value.push(oldValue);
  });
  
  // const obj = ref<{ name: string; age: number }>({ name: "fk", age: 18 });
  //由于obj为ref声明，修改obj的属性值时，不会触发watch，但可以使用deep选项来深度监听，这样就可以监听到obj的属性值的变化了。
  //或者用reactive声明obj，这样不用设置deep选项，也可以监听到obj的属性值的变化。
  const obj = reactive<{ name: string; age: number }>({ name: "fk", age: 18 });
  // watch(
  //   obj,
  //   (newValue, oldValue) => {
  //     console.log(newValue, oldValue);
  //   },
  //   { deep: true, immediate: true, flush: "pre" }
  // );
  
  watchEffect(
    (onCleanup) => {
      // 副作用清理
      onCleanup(() => {
        console.log("before");
      });
      console.log(obj.name);
      console.log(obj.age);
  
      // flush 用于控制回调函数的执行时机，可选值为 'pre' 'sync' 'post'，pre表示在组件更新前执行、sync同步执行、post表示在组件更新后执行
      let objDom = document.getElementById("obj");
      console.log(objDom);
    },
    { flush: "post" }
  );
  </script>
  
  <style>
  </style>