<script setup>
import { ref } from 'vue'
const props=defineProps(['data'])
</script>

<template>
 <ul>{{data.name}}
 <ul v-for="item in props.data.children">
 <HelloWorld :data="item" />
 </ul>
 </ul>

</template>
