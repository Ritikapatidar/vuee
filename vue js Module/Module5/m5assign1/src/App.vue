<script setup>
import users from './components/users.vue'
</script>

<template>
<nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container">
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
        <li class="nav-item px-4">
          <router-link class="nav-link fs-5" to="/">Home</router-link>
        </li>
        <li class="nav-item px-4">
          <router-link class="nav-link fs-5" to="/users">Users</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  <div> <router-view /> </div>
</template>

