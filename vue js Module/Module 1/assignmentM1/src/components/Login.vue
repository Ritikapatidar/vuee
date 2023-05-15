<script setup>
import { ref } from "vue";
import Rectangle from "./Rectangle.vue";

const username = ref("");
const password = ref("");
const passIcon = ref(false);
const passType = ref("password");
let loginStatus = ref(false);

function handleLogin(e) {
  e.preventDefault();
  if (!username.value) {
    alert("Please Enter Username");
  } else if (!password.value) {
    alert("Please Enter password");
  } else if (username.value !== "admin" || password.value !== "admin") {
    alert("Please Enter username & password='admin' ");
  } else {
    loginStatus.value = true;
    username.value = "";
    password.value = "";
  }
}

function handleIcon() {
  passIcon.value = !passIcon.value;
  if (passIcon.value) {
    passType.value = "text";
  } else {
    passType.value = "password";
  }
}
</script>
<template>
  <div class="row rounded px-sm-0 py-2" id="login-container">
    <div class="col-12 col-sm-8 col-lg-6 m-auto rounded py-4" id="login-form">
      <h2 class="text-center">Login Form</h2>
      <form class="p-3 rounded">
        <div class="mb-3">
          <label for="username" class="form-label fs-5">Username</label>
          <input
            type="text"
            v-model="username"
            name="username"
            id="username"
            class="form-control form-control-lg"
            placeholder="UserName"
          />
        </div>

        <div class="form-group">
          <label for="password" class="form-label fs-5">Password</label>
          <div class="mb-3 input-group">
            <input
              :type="passType"
              v-model="password"
              name="password"
              id="password"
              class="form-control form-control-lg"
              placeholder="Password"
            />
            <span class="input-group-text" @click="handleIcon">
              <i
                class="fs-4"
                :class="passIcon ? 'bi bi-eye-fill' : 'bi bi-eye-slash-fill'"
              ></i>
            </span>
          </div>
        </div>

        <button
          type="submit"
          @click="handleLogin"
          class="btn btn-primary btn-lg btn-block w-100"
        >
          Login
        </button>
      </form>
    </div>
    <div class="col-12 col-sm-4 col-lg-6 m-auto rounded" id="image-holder"></div>
  </div>
  <div class="mt-3" v-if="loginStatus">
    <Rectangle />
  </div>
</template>

<style>
#image-holder {
  display: table-cell;
  padding: 210px;
  background: url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp);
  background-size: cover;
}
#login-container {
  background-color: #495da952;
}
@media screen and (min-width: 991px) and (max-width: 1199px) {
  #image-holder {
    padding: 165px;
  }
}
@media screen and (max-width: 991px) {
  #image-holder {
    display: none;
  }
  #login-container {
    background-color: transparent;
  }
  #login-form {
    background-color: #495da952;
  }
}
</style>
