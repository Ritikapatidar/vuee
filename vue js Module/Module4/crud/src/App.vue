<script setup>
import GetData from './components/GetData.vue'
</script>

<template>
  <nav class="navbar navbar-expand-lg">
  <ul class="nav w-100 d-flex justify-content-center">
    <li class="nav-item">
    <button class="button"><router-link to="/CreateUser" class="nav-link fs-5">Create User <i class="bi bi-person-fill p-1 text-primary"></i></router-link></button>
    </li>
  </ul>
  </nav>
   <div> <router-view /> </div>
   <div class="container"> <GetData /> </div>
</template>
