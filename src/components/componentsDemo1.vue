<template>
  <div>
    <h1>componentsDemo1</h1>
    <h2>父组件传过来的的：{{ msg }}</h2>
    <h2>ids:{{ ids }}</h2>
    <hr>
    <button @click="send">send</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// const props=defineProps({
//   msg: {
//     type: String,
//     default: "啥也不是", // 默认值
//   },
// });

// 使用ts定义组件的props类型
interface Props  {
    msg?: string;
    ids?: number[];
}
const props=withDefaults(defineProps<Props>(), {
    msg: "张三",
    ids: [1, 2, 3]
})
console.log(props.msg);
const emit = defineEmits<{
    (e: "getChildData", data: any): void
}>()
const send = () => {
    emit("getChildData", "我是子组件");
}
defineExpose({  
    name:'子组件',
    getNameFun: () => { 
        console.log('子组件里的');
    } // 暴露一个函数，子组件可以调用这个函数，父组件可以拿到这个函数，然后调用这个函数，实现子组件调用父组件的方法，类似vue2的$emit，$o
})
</script>

<style scoped>
</style>