<script setup>
import { ref, computed, onMounted } from "vue";
import {useRoute} from 'vue-router';
import getData from './logic.js'
const route=useRoute();

const {data, error, getD}= getData();
onMounted(()=>
{
getD(`https://gorest.co.in/public/v2/users/${route.params.id}/posts`)
}) 
console.log("posts ", data.value);

</script> 
<template>
<div class="container">
<div class="row">
<p class="fs-5 fw-bold" v-if="data.length<1">No posts ...</p>
<div v-for="item in data" class="col-12 col-md-6 col-lg-4">
<div class="card text-center">
    <div class="card-body" style="background-color:#b3dcff47">
        <h4 class="card-title">User ID: {{item.user_id}}</h4>
        <p class="card-text fs-5">{{item.title}}</p>
        <p class="card-text">{{item.body}}</p>
      <button class="btn" style="background-color:#628caf57"> <router-link class="nav-link p-0 text-dark" :to="{name:'Commentt', params:{postId: item.id}}"> Comments </router-link> </button> 
    </div>
</div>
</div>
</div>
  </div>
</template>
