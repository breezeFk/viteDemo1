<template>
  <div>
    ref:{{ person }}
    <br>
    shallowRef:{{ person2 }}
    <br>
    customRef:{{ person3 }}
    <br>
    <button @click="changeFun">
      changeFun
    </button>
    <button @click="changeFun2">
      changeFun2
    </button>
    <div ref="refDom"></div>
  </div>

</template>

<script setup lang="ts">
import { ref, shallowRef, isRef, triggerRef, customRef } from 'vue'

const person = ref({
  name: 'fk'
})
console.log(isRef(person));
const person2 = shallowRef({
  name: 'kf'
})
const changeFun = () => {
  person.value.name = 'fkf';
  person2.value.name = 'kff';
  //直接修改person2.value.name不会触发视图更新
  // person2.value= {
  //     name:'kff'
  // };
}
const changeFun2 = () => {
    person2.value.name= 'kff';
    triggerRef(person2);
    //手动触发ref对象的响应更新
}

const myRef = <T>(value: T) => {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
      }
    }
  })
}
const person3: any = myRef({ name: 'fkf' });
console.log(person3.value);

const refDom = ref<HTMLElement | null>(null);
console.log(refDom);

</script>

<style></style>