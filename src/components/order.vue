<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>订单</div>
  <router-link to="/">home</router-link>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
