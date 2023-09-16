<script setup>
import { ref,onMounted } from "vue";
import Welcome from "./Welcome.vue";
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import {useRouter} from 'vue-router'
import getData from './logic.js'
const router=useRouter();

const gmail = ref("");
const password = ref("");
const passIcon = ref(false);
const passType = ref("password");
const matchedData = ref('')
const {getD, data, error}=getData();

const rules={
  gmail:{required, email},
  password:{required}
}
const v$= useVuelidate(rules, {gmail, password})

async function handleLogin(e) {
 const result=await v$.value.$validate()
 await getD("https://gorest.co.in/public/v2/users");
 console.log("data in login file: ", data.value);

matchedData.value = await data.value.find((item) => item.email === gmail.value);
console.log("matchedData: ", matchedData);

 if(result && matchedData.value && password.value=="123456"){
  router.push(`/profile/${matchedData.value.id}`)
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
 <div class="container m-auto">
<p class="my-1">Password: 123456 </p>
  <div class="row rounded px-sm-0 py-2" id="login-container">
    <div class="col-12 col-sm-8 col-lg-6 m-auto rounded py-4" id="login-form">
      <h2 class="text-center">Login Form</h2>
      <form class="p-3 rounded">
        <div class="mb-3">
          <label for="username" class="form-label fs-5">email</label>
          <input
            type="text"
            v-model="gmail"
            name="email"
            id="email"
            class="form-control form-control-lg"
            placeholder="Enter email"
          />
            <div v-for="error in v$.gmail.$errors"><span v-if="error.$message" class="text-danger">{{error.$message}}</span></div>
        </div>
      

        <div class="form-group mb-3">
          <label for="password" class="form-label fs-5">Password</label>
          <div class="input-group">
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
              <div v-for="error in v$.password.$errors"><span v-if="error.$message" class="text-danger">Password required</span></div>
        </div>

        <button
          type="submit"
          @click.prevent="handleLogin"
          class="btn btn-primary btn-lg btn-block w-100"
        >
          Login
        </button>
      </form>
    </div>
    <div class="col-12 col-sm-4 col-lg-6 m-auto rounded" id="image-holder"></div>
  </div>
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
