<script setup>
import { ref,reactive } from 'vue'
const fname=ref('')
const mname=ref('')
const lname=ref('')
const dob=ref('')
const place=ref('')
const language=ref('')
const address=ref('')

const stddataObj=reactive({})

const prop=defineProps(['studentData'])
// prop.studentData(fname.value,lname.value);
// console.log(fname);
// stddataObj.value={fname:fname.value, lname:lname.value}
// console.log(stddataObj.value);
</script>

<template>
<div style="background-color: rgb(51 68 96 / 13%)">
<h2 class="text-center bg-secondary">Student Details</h2>
<form class="p-2" @keyup="prop.studentData({fname,mname,lname,dob,place,language,address})">
<div class="row my-4">
  <div class="col">
    <div class="form-outline">
      <input type="text" id="fname" class="form-control" v-model="fname" placeholder="First name" />
    </div>
  </div>
  <div class="col">
    <div class="form-outline">
      <input type="text" id="mname" class="form-control" v-model="mname" placeholder="Middle name" />
    </div>
  </div>
  <div class="col">
    <div class="form-outline">
      <input type="text" id="lname" class="form-control" v-model="lname" placeholder="Last name" />
    </div>
  </div>
</div>

<div class="row my-4">
  <div class="col">
    <div class="form-outline">
      <input type="date" id="dob" class="form-control" v-model="dob" placeholder="Date OF Birth" />
    </div>
  </div>
  <div class="col">
    <div class="form-outline">
      <input type="text" id="pBirth" class="form-control" v-model="place" placeholder="Place OF Birth" />
    </div>
  </div>

  <div class="col">
    <div class="form-outline">
      <input type="text" id="language" class="form-control" v-model="language" placeholder="First Language" />
    </div>
  </div>
</div>

<div class="row my-4 mx-3">
  <div class="col">
    <div class="form-outline">
      <textarea id="address" class="form-control" placeholder="Address" v-model="address" rows="4" ></textarea>
    </div>
  </div>
</div>
</form></div>
</template>
