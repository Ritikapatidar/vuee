<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.params.id);
</script>
<template>
  <div
    class="container-fluid text-center border py-2"
    style="background-color: rgb(39 60 137 / 42%)"
  >
    <button class="btn" style="background-color: #628caf57">
      <router-link
        class="nav-link text-dark fs-5 p-1"
        :to="{ name: 'post', params: { id: route.params.id } }"
        >Posts</router-link
    >
    </button>
  </div>

  <div><router-view /></div>
</template>
