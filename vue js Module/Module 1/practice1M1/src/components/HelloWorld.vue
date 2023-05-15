<script setup>
import {ref} from 'vue'
defineProps({
  msg: String
});
const name=ref("Ritika")
const inputText=ref("")
</script>
<template>
<input type="text" v-model="inputText" />
  <h1>{{ msg + ' ' +name +" " +inputText}}</h1>
</template>
