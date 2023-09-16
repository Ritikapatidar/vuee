<script setup>
import { ref, watchEffect, onMounted } from "vue";
import useFunction from "../composable/apiData.js";
const { getAllData, data, error } = useFunction();

async function getData() {
  await getAllData("https://gorest.co.in/public/v2/users")
  
}
</script>

<template>
  <div class="bg-light p-4 border">
    <button class="btn btn-primary m-auto d-block" @click="getData">Get data</button>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4" v-for="i in data.value">
        <div class="card bg-light">
          <div class="card-body">
            <h4 class="card-title"><strong>Name: </strong>{{ i.name }}</h4>
            <p class="card-text"><strong>Email: </strong>{{ i.email }}</p>
            <p class="card-text"><strong>Status: </strong>{{ i.status }}</p>
            <p class="card-text"><strong>Gender: </strong>{{ i.gender }}</p>
          </div>
          <div class="card-body">
           <button class="btn btn-secondary p-0 mx-2"><router-link class="nav-link text-light " :to="{name:'posts', params:{ id: i.id }}">Posts</router-link></button>
           <button class="btn btn-secondary p-0 mx-2"><router-link class="nav-link text-light " :to="{name:'todos', params:{ id: i.id }}">Todos</router-link></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div><router-view /></div>
</template>
