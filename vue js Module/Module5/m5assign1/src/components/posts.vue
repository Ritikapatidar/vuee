<script setup>
import { ref, watchEffect } from 'vue'
import {useRoute} from 'vue-router'
import useFunction from '../composable/apiData.js'

const routes= useRoute();
console.log(routes.params.id);
const { getAllData, data }= useFunction();
let url=`https://gorest.co.in/public/v2/users/${routes.params.id}/posts`;
getAllData(url); 
</script>

<template>
  <div class="container">
  <h2 class="text-center">Posts</h2>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4" v-for="i in data.value">
        <div class="card bg-info border">
          <div class="card-body">
            <h4 class="card-title"><strong> Title:</strong> {{ i.title }}</h4>
            <p class="card-text"><strong>Body:</strong> {{ i.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h2 v-if="!data.value">Loading...</h2>
  <router-view />
</template>

