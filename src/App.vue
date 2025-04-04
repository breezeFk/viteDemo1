<template>
  <!-- <div>
    firstName: <input v-model="firstName" /> <br />
    lastName: <input v-model="lastName" /> <br />
    name：{{ name }}
    <hr />
    changeName: <input v-model="changeName" /> <br />
    <button @click="changeNameFun">changeNameFun</button>
  </div> -->

  <div>
    <h1>商品列表DEMO</h1>
    <table border="1">
      <thead>
        <tr>
          <th>商品名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.price * product.quantity }}</td>
          <td style="">
            <button style="cursor: pointer" @click="product.quantity++">
              +
            </button>
            <br />
            <button
              style="cursor: pointer"
              @click="product.quantity ? product.quantity-- : ''"
            >
              -
            </button>
          </td>
        </tr>
        <tr>
          <td>总计</td>
          <td>{{ allPrice }}</td>
          <td>{{ allQuantity }}</td>
          <td>{{ totalPrice }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

const firstName = ref("f");
const lastName = ref("k");
const changeName = ref("");
// computed 计算属性 可以根据其他属性的值来计算出一个新的值，
// 选项式写法，在computed中可以使用get和set方法，get方法用于获取计算属性的值，set方法用于设置计算属性的值。
const name = computed({
  get() {
    return firstName.value + "-" + lastName.value;
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split("-");
  },
});

//函数式写法
// const name = computed(() => {
//   return firstName.value + "-" + lastName.value
//  })

//函数式写法，只读，不能设置值，函数式写法没有set方法，
const changeNameFun = () => {
  name.value = changeName.value;
};

const products = ref([
  { name: "商品1", price: 100, quantity: 2 },
  { name: "商品2", price: 200, quantity: 1 },
  { name: "商品3", price: 50, quantity: 5 },
]);

const allPrice = computed(() => products.value.reduce((total, p) => total + (p.price || 0), 0));
const allQuantity = computed(() => products.value.reduce((total, p) => total + (p.quantity || 0), 0));
const totalPrice = computed(() => products.value.reduce((total, p) => total + (p.price * p.quantity || 0), 0));
</script>

<style>
td {
  width: 200px;
}
td > p {
  font-size: 20px;
}
button {
  width: 80px;

  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}
</style>