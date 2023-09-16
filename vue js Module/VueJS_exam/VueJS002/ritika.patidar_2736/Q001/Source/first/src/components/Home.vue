<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Navbar from "./Navbar.vue";

const route = useRoute();

</script>
<template>
  <Navbar />
  <div><router-view /></div>
</template>
