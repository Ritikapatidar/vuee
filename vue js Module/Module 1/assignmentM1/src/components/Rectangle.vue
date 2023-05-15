<script setup>
import { ref, computed } from "vue";
const height = ref("");
const width = ref("");
let area=ref(0);

const calculate=()=>{
area.value=height.value*width.value;
}
</script> 
<template>
  <div
    class="text-center border  py-5"
    style="background-color: rgb(39 60 137 / 22%)"
  >
    <h3>Calculate area Of Rectangle</h3>
    <div class="d-flex p-2">
    <input type="number" class="form-control" placeholder="Enter Height Here" v-model="height" />
    <input type="number" class="form-control" placeholder="Enter Width Here" v-model="width" />
    </div>
    <button @click="calculate" class="btn btn-success my-2">Calculate Area</button>
    <p
      class="my-2 fs-5"
      >Area Of Rectangle: <strong>{{ area }}</strong></p
    >
  </div>
</template>
