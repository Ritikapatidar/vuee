<script setup>
import students from "./studentData.json";
</script>
<template>
  <div class="container">
    <div class="row" v-for="i in students">
      <div class="col-12 col-md-4 m-auto">
        <div class="card bg-success p-3 my-2" v-if="$route.params.Sid == i.id">
          <h5>{{ i.name }}</h5>
          <h5>Fees: {{ i.Fees }}</h5>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>
