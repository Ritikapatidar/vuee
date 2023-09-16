<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import useFunction from "../composable/apiData.js";
const route = useRoute();
const { getAllData, data, error } = useFunction();
const url = `https://gorest.co.in/public/v2/users/${route.params.id}/todos`;
getAllData(url);
console.log("object", data, error.value);
</script>

<template>
  <div class="container">
  <h2 class="text-center">Todos</h2>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4" v-for="i in data.value">
        <div class="card bg-info border">
          <div class="card-body">
            <h4 class="card-title"><strong> Title:</strong> {{ i.title }}</h4>
            <p class="card-text"><strong>Due Date:</strong> {{ i.due_on }}</p>
            <p class="card-text"><strong>Status:</strong> {{ i.status }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h2 v-if="!data.value">Loading...</h2>
</template>
