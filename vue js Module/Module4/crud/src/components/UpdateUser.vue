<script setup>
import { ref, watchEffect } from "vue";
import {getSingleUserData, getAllUserData} from '../composable/ApiData.js'
import {useRoute} from 'vue-router'

const route=useRoute();

let url=ref("https://gorest.co.in/public/v2/users")
const { getSingleData, UpdateSingleUser, editData,  error }=getSingleUserData();
const { getAllData }= getAllUserData(url);

watchEffect(()=>{
  getSingleData(url.value+"/"+route.params.id)
  })

  async function handleEdit(){
  console.log(editData.value);
  await UpdateSingleUser(url.value+"/"+route.params.id, editData.value)
  await getAllData(url)  // Get new data after update
}

</script>
<template>
  <div class="container my-4">
    <div class="row">
      <div class="col" v-if="editData">
        <form class="p-4 createform" method="POST">
          <h2 class="text-center">Update User</h2>
            <div class="mb-2">
            <label for="id" class="form-label fw-bold">Id</label>
            <input
              type="text"
              name="id"
              id="id"
              v-model="editData.id"
              class="form-control"
              readonly
              disabled
            />
          </div>
          <div class="mb-2">
            <label for="name" class="form-label fw-bold">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="editData.name"
              class="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div class="mb-2">
            <label for="email" class="form-label fw-bold">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              v-model.trim="editData.email"
              class="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div class="mb-2">
            <label class="form-check-label me-3 fw-bold">Gender: </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="male"
                v-model="editData.gender"
                value="male"
              />
              <label class="form-check-label" for="male">Male</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="female"
                v-model="editData.gender"
                value="female"
              />
              <label class="form-check-label" for="female">Female</label>
            </div>
          </div>
          <div class="mb-3">
            <label for="status" class="form-label fw-bold">Status</label>
            <select class="form-select" name="status" id="status" v-model="editData.status">
              <option selected value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <button class="button px-4 py-2 d-block m-auto" @click.prevent="handleEdit">
            Save
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
