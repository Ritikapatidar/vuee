<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";
import { PostUsers } from "../composable/ApiData.js";
import { ref, reactive, computed } from "vue";
let userObj = reactive({ name: "", email: "", gender: "", status: "" });

// validation start
const rules = computed(() => {
  return {
    name: { required, minLength: minLength(3) },
    email: { required, email },
    gender: { required },
    status: { required },
  };
});
const v$ = useVuelidate(rules, userObj);
// validation end

async function handleAdd() {
  const result = await v$.value.$validate();
  if (result) {
    let url = ref("https://gorest.co.in/public/v2/users");
    await PostUsers(url, userObj);
    // userObj.name= ""
    // userObj.email= ""
    // userObj.gender= ""
    // userObj.status= ""
   }   
}
</script>

<template>
  <div class="container my-4">
    <div class="row">
      <div class="col">
        <form class="p-4 createform" method="POST" @submit.prevent="handleAdd">
          <h2 class="text-center">Create User</h2>
          <div class="mb-2">
            <label for="name" class="form-label fw-bold">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="userObj.name"
              class="form-control"
              placeholder="Enter Name"
            />
            <span class="text-danger" v-for="error in v$.name.$errors">{{
              error.$message
            }}</span>
          </div>
          <div class="mb-2">
            <label for="email" class="form-label fw-bold">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              v-model="userObj.email"
              class="form-control"
              placeholder="Enter Email"
            />
            <span class="text-danger" v-for="error in v$.email.$errors">{{
              error.$message
            }}</span>
          </div>
          <div class="mb-2">
            <label class="form-check-label me-3 fw-bold">Gender: </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="male"
                v-model="userObj.gender"
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
                v-model="userObj.gender"
                value="female"
              />
              <label class="form-check-label" for="female">Female</label>
            </div>
            <span class="text-danger" v-for="error in v$.gender.$errors">{{
              error.$message
            }}</span>
          </div>

          <div class="mb-3">
            <label for="status" class="form-label fw-bold">Status</label>
            <select
              class="form-select"
              name="status"
              id="status"
              v-model="userObj.status"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <span class="text-danger" v-for="error in v$.status.$errors">{{
              error.$message
            }}</span>
          </div>
          <button class="button px-4 py-2 d-block m-auto">Add User</button>
        </form>
      </div>
    </div>
  </div>
</template>
