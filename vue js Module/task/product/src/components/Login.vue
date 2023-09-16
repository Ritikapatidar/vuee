<script setup>
import { ref, reactive, onMounted } from "vue";
import router from '../router'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import getApiData from '../composable/apiData.js'
import {onBeforeRouteLeave} from 'vue-router'
const passIcon=ref(false)
const passType=ref("password")
const formData=reactive({
    email:'', password:''
})
const rules={
        email:{ required },
        password: { required }
}
const v$=useVuelidate(rules, formData)

const {getData, data}=getApiData();
async function handleLogin()
{
    let result=await v$.value.$validate();
    await getData("https://fakestoreapi.com/users")
    console.log("Login data: ", data.value);
    let user=data.value.find((item)=> item.email==formData.email && item.password==formData.password);
    if(result && user){
    localStorage.setItem("loginInfo", JSON.stringify(formData))
    router.replace(`/Home/${user.email}`)
    }
    else if(result && !user){
        alert("Invalide username or password!")
    }
}

onMounted(() => {
  let user=localStorage.getItem('loginInfo');
  if(user){
    let u=JSON.parse(user)
    router.push({name:'Home', params:{name: u.email}})
  }
})

const handleIcon=()=>{
passIcon.value=!passIcon.value
if(passIcon.value){
    passType.value="text"
}
else{
    passType.value="password"
}
}
</script>
<template>
  <div class="container m-auto mt-5">
    <div class="row rounded px-sm-0 py-2" id="login-container">
      <div class="col-12 col-sm-8 col-lg-5 m-auto rounded py-4" id="login-form">
        <h2 class="text-center">Login Form</h2>
        <form class="p-3 rounded">
          <div class="mb-3">
            <label for="username" class="form-label fs-5">email</label>
            <input
              type="text"
              v-model="formData.email"
              name="email"
              id="email"
              class="form-control form-control-lg"
              placeholder="Enter email"
            />
            <div v-for="error in v$.email.$errors"><span class="text-danger">{{error.$message}}</span>  </div>
          </div>

          <div class="form-group mb-3">
            <label for="password" class="form-label fs-5">Password</label>
            <div class="input-group">
              <input
                :type="passType"
                v-model="formData.password"
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
            <div v-for="error in v$.password.$errors"><span class="text-danger">{{error.$message}}</span>  </div>
          </div>

          <button
            type="submit"
            @click.prevent="handleLogin"
            class="btn btn-lg btn-block w-100 loginBtn"
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

<style>
#image-holder {
  display: table-cell;
  padding: 210px;
  background: url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp);
  background-size: cover;
}
#login-container {
  background-color: #29556ead;
}
.loginBtn{
  background-color:#3f588f80;
}
.loginBtn:hover{
  background-color:#3f588feb;
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
    background-color: #29556ead;
  }
}
</style>
