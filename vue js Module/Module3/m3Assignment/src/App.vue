<script setup>
import Student from './components/Student.vue'
import Father from './components/Father.vue'
import Mother from './components/Mother.vue'
import {ref} from 'vue'
const show=ref(false);
const stdObj=ref({})

function SubmitData(){
  console.log("clicked");
  show.value=true;
}
function studentData(stdData){
  console.log("student",stdData);
  stdObj.value=stdData;
}
</script>

<template>
<div class="container">
  <Student :studentData="studentData"  />
  <hr class="bg-dark" style="height:2px" />
  <Father />
  <hr class="bg-dark" style="height:2px" />
  <Mother />
  <button class="btn btn-secondary my-2 fs-5 d-block m-auto" @click="SubmitData">Submit</button>

  <div v-if="show">
  <table class="table mt-4">
  <thead class="bg-secondary text-light">
  <th>Full Name</th>  <th>Date Of Birth</th>   <th>Place Of Birth</th> <th>First Language</th> <th>Address</th>
  </thead>
  <tbody>
  <tr><td>{{stdObj.fname}} {{stdObj.mname}} {{stdObj.lname}}</td><td>{{stdObj.dob}}</td><td>{{stdObj.place}}</td><td>{{stdObj.language}}</td><td>{{stdObj.address}}</td></tr>
  </tbody>
  </table>
  <p></p>
  </div>
</div>
</template>

