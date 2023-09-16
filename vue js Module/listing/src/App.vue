<script setup>
import HelloWorld from './components/HelloWorld.vue'
import getData from './components/logic.js'
import {onMounted, watchEffect} from 'vue'

const {data, getD} = getData();
onMounted(() => {
  getD('./data.json')
})
console.log("data at app:", data.value);

</script>
<template>
  <HelloWorld :data="data" />
</template>
