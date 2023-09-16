<script setup>
import students from "./studentData.json";
</script>
<template>
  <div class="container">
    <div class="row" v-for="i in students">
      <div class="col-12 col-md-4 m-auto">
        <div class="card bg-success p-3 my-2" v-if="$route.params.Sid == i.id">
          <h5>{{ i.name }}</h5>
            <ul>
              <strong class="fs-5">Result:</strong>
              <li>Marks: {{ i.Result.Marks }}</li>
              <li>Grade: {{ i.Result.Grade }}</li>
            </ul>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>
