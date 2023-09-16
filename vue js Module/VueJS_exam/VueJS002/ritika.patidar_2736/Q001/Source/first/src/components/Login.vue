<script setup>
import { ref, watchEffect, computed } from "vue";
import router from "../router";
import getData from "../composable/apiData.js";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const userObj = ref({ emailid: "" });
const rules = computed(() => {
  return {
    emailid: { required, email },
  };
});
const v$ = useVuelidate(rules, userObj);

let url = ref("https://jsonplaceholder.typicode.com/users");

const { data, getD, error } = getData();

async function handelLogin() {
  let result = await v$.value.$validate();
  await getD(url.value);
  console.log("Login: ", data.value);
  let user = data.value.find((item) => item.email == userObj.value.emailid);

  if (result) {
    if (user) {
      localStorage.setItem("loginInfo", JSON.stringify(user));
      router.push(`/Home/${user.id}`);
    } else {
      alert("Invalide email address !!");
    }
  }
}
</script>

<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-12 col-md-6 m-auto">
        <div class="card loginFrom">
          <form>
            <h2 class="text-center">Login Form</h2>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="text"
                v-model="userObj.emailid"
                name="email"
                id="email"
                class="form-control"
                placeholder="Email Address"
                aria-describedby="helpId"
              />
              <div v-for="error in v$.emailid.$errors">
                <span class="text-danger">{{ error.$message }}</span>
              </div>
            </div>
            <button class="m-auto d-block" @click.prevent="handelLogin">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.card {
  background-color: #4ba3b1e6;
}
</style>
