<script setup>
import {ref} from 'vue';
import Display from './components/Display.vue'
const name=ref('')
const click=ref(false);

const handleClick=()=>{
  if(name.value){
  click.value=true;
  }
}
</script>

<template>
<label class="fs-5">Enter Your Name:</label>
<input type="text" v-model="name" class="form-control" />
<button @click="handleClick" class="border my-1 ">Click</button>
<div v-if="click"> <Display :name="name" /> </div>
</template>
