<script setup>
import { ref, onMounted } from "vue";
import getData from "../composable/apiData.js";
import { useRoute } from "vue-router";

const route = useRoute();
let url = `https://jsonplaceholder.typicode.com/posts/${route.params.postID}/comments`;
const { data, getD, error, postedData } = getData();
let allComments = ref([]);
let comments = JSON.parse(localStorage.getItem("CommentData"));

onMounted(() => {
  getD(url);
});
</script>

<template>
  <div class="container my-2">
    <table class="table table-bordered">
      <thead class="bg-secondary text-light">
        <tr>
          <th>Comment ID</th>
          <th>Post ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, index) in comments">
          <td>{{}}</td>
          <td>{{ $route.params.postID }}</td>
          <td>{{ i.name }}</td>
          <td>{{ i.email }}</td>
          <td>{{ i.body }}</td>
        </tr>
        <tr v-for="j in data">
          <td>{{ j.id }}</td>
          <td>{{ j.postId }}</td>
          <td>{{ j.name }}</td>
          <td>{{ j.email }}</td>
          <td>{{ j.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
