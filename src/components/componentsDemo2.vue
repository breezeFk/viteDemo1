<template>
  <div>
    <slot name="header"></slot>
    <div>
      <div v-for="item in 100">
        <slot :data="item"></slot>
      </div>
    </div>

    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>