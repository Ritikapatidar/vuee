<script setup>
import { ref, onMounted, watchEffect } from "vue";
import getData from "../composable/apiData.js";
import { useRoute } from "vue-router";
const route = useRoute();
let url = `https://jsonplaceholder.typicode.com/users/${route.params.id}/posts`;
const { data, getD, error, postedData } = getData();
let allPost = ref([]);
let posts = JSON.parse(localStorage.getItem("PostData"));
onMounted(() => {
  getD(url);
});
</script>

<template>
  <div class="container my-2">
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead class="bg-secondary text-light">
          <tr>
            <th>Post ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Create Comment</th>
            <th>Get Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, index) in posts">
            <td>{{ index + 1 }}</td>
            <td>{{ i.userId }}</td>
            <td>{{ i.title }}</td>
            <td>{{ i.body }}</td>
            <td class="text-center">
              <button class="bg-secondary disabled">Create</button>
            </td>
          </tr>
          <tr v-for="j in data">
            <td>{{ j.id }}</td>
            <td>{{ j.userId }}</td>
            <td>{{ j.title }}</td>
            <td>{{ j.body }}</td>
            <td class="text-center">
              <button class="py-0 px-1 bg-secondary">
                <router-link
                  class="nav-link text-light"
                  :to="{ name: 'CreateComment', params: { postID: j.id } }"
                  >Create</router-link
                >
              </button>
            </td>
            <td class="text-center">
              <button class="py-0 px-1 bg-secondary my-auto">
                <router-link
                  class="nav-link text-light"
                  :to="{ name: 'Comments', params: { postID: j.id } }"
                  >See</router-link
                >
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
