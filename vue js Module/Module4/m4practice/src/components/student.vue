<script setup>
import { ref } from "vue";
import students from "./studentData.json";
console.log(students);
</script>
<template>
  <div class="container">
    <div class="row">
      <div v-for="i of students" class="col-12 col-sm-6 col-lg-3">
        <div class="card">
          <img class="card-img-top" height="200" :src="i.img" alt="Title" />
          <div class="card-body">
            <h4 class="card-title">{{ i.name }}</h4>
            <p class="card-text m-0"><strong>Age:</strong>{{ i.age }}</p>
            <p class="card-text"><strong>College:</strong>{{ i.clg }}</p>
          </div>
          <div class="card-footer">
              <router-link
                class="nav-link text-success p-0"
                :to="{ name: 'StudentDetail', params: { id: i.id } }"
                >See More <i class="bi bi-arrow-down"></i></router-link
              >
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <router-view />
    </div>
  </div>
</template>
