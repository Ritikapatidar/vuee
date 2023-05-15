<script setup>
import {ref} from "vue"
import HelloWorld from './components/HelloWorld.vue'
import Greeting from './components/Greeting.vue'

const username=ref("username")
const password=ref("password")
const status=ref(false)

function handleLogin(){
  if(username.value=="admin" && password.value=="admin")
  {
    status.value=true;
  }
}
</script>

<template>
  <div>
    <Greeting/>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div>
  <input type="text" placeholder="Username" v-model="username" />
  <input type="text" placeholder="Password" v-model="password" />
  <button @click="handleLogin">Login</button>
  </div>
 
 <div v-if="status">
  <HelloWorld msg="Hello World" />
 </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
