<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import {useRouter} from 'vue-router'
import getData from "../composable/apiData.js";

const router=useRouter();

const formData = ref({ username: "", password: "" });
const { data, getD } = getData();
// onMounted(() => {
  getD("data.json");
// });

///////////////// Validation /////////////////
const rules = computed(() => {
  return {
    username: { required },
    password: { required }
  };
});
const v$ = useVuelidate(rules, formData);
//////////////////Validation end//////////////
async function handleLogin() {
  let result = await v$.value.$validate();
  let userr=data.value.users.find((item)=> item.userName==formData.value.username && item.password==formData.value.password)
  if (userr && result) {
    localStorage.setItem('loginData', JSON.stringify(userr))
    router.push(`/Home/${userr.role}`)
    console.log("login");
  }
  else if(result && !userr){
  alert("Invalide username/password !!");
  }
}
</script>

<template>
  <p>Login Component</p>
  {{ data.users }}
  <div class="container m-auto mt-5">
    <div class="row rounded px-sm-0 py-2 d-block" id="login-container">
      <div
        class="col-12 col-sm-8 col-lg-5 m-auto rounded py-4 bg-light border border-primary"
        id="login-form"
      >
        <h2 class="text-center">Login Form</h2>
        <form class="p-3 rounded">
          <div class="mb-3">
            <label for="username" class="form-label fs-5">username</label>
            <input
              type="text"
              v-model="formData.username"
              name="username"
              id="username"
              class="form-control form-control-lg"
              placeholder="Enter username"
            />
            <div v-for="error in v$.username.$errors"><span class="text-danger">{{error.$message}}</span>  </div>
          </div>

          <div class="form-group mb-3">
            <label for="password" class="form-label fs-5">Password</label>
            <div class="input-group">
              <input
                type="text"
                v-model="formData.password"
                name="password"
                id="password"
                class="form-control form-control-lg"
                placeholder="Password"
              />
            </div>
            <div v-for="error in v$.password.$errors"><span class="text-danger">{{error.$message}}</span>  </div>
          </div>

          <button
            type="submit"
            @click.prevent="handleLogin"
            class="btn btn-lg btn-primary btn-block w-100 loginBtn"
          >
            Login
          </button>
          <span>Take data from console for login !!</span>
        </form>
      </div>
      <div class="col-12 col-sm-4 col-lg-6 m-auto rounded" id="image-holder"></div>
    </div>
  </div>
</template>
