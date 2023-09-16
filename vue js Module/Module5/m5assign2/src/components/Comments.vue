<script setup>
import { ref, computed, onMounted } from "vue";
import {useRoute} from 'vue-router';
import getData from './logic.js'
const route=useRoute();

const {data, error, getD}= getData();
onMounted(()=>
{
    
getD(`https://gorest.co.in/public/v2/posts/${route.params.postId}/comments`)
}) 
console.log("comments ", data.value);

</script> 
<template>
<div class="container">
<div class="row">
<h2 class="text-secondary">Comments <i class="bi bi-arrow-bar-down"></i></h2>
<p class="fs-5 fw-bold" v-if="data.length<1">No comments...</p>
<div v-for="item in data" class="col-12 col-md-6 col-lg-4">
<div class="card">
    <div class="card-body" style="background-color:#b3dcff47">
        <h4 class="card-title text-secondary"><strong>Post ID: </strong>{{item.post_id}}</h4>
        <p class="card-text m-0"><strong>Name: </strong>{{item.name}}</p>
        <p class="card-text m-0"><strong>Email: </strong>{{item.email}}</p>
        <p class="card-text"><strong>Post Description: </strong>{{item.body}}</p>
    </div>
</div>
</div>
</div>
  </div>
</template>
