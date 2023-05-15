<script setup>
import { ref, reactive } from "vue";
import Login from "./Login.vue";
const status = ref(false);
const name = ref("");
const panNumber = ref("");
const address = ref("");
const errorObj = ref({});
const userArr = reactive([]);
const registerStatus = ref(false);

function validate() {
  let flag = false;
  let err = {};
  if (!name.value) {
    err.name = "Please Enter Your Name";
    errorObj.value = err;
    flag = true;
  } else if (name.value.length < 3) {
    err.name = "Name should contain atleast 3 characters";
    errorObj.value = err;
    flag = true;
  }
  if (!panNumber.value) {
    err.panNumber = "Please Enter Pan Number";
    errorObj.value = err;
    flag = true;
  } else if (panNumber.value.toString().length !== 10) {
    err.panNumber = "Enter valid Pan Number of 10 digit";
    errorObj.value = err;
    flag = true;
  }
  if (!address.value) {
    err.address = "Please Enter Your Address";
    errorObj.value = err;
    flag = true;
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
}

function handleSignUp(e) {
  e.preventDefault();
  if (!validate()) {
    status.value = true;
    userArr.push({
      name: name.value,
      panNumber: panNumber.value,
      address: address.value,
    });
    name.value = "";
    panNumber.value = "";
    address.value = "";
    errorObj.value = {};
    registerStatus.value = true;
  }
}
</script>
<template>
  <div class="row mt-5">
    <div
      class="col-12 text-white shadow-1-strong rounded col-sm-8 col-lg-6 mx-auto my-2"
      style="
        background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/003.webp');
        opacity: 0.8;
      "
    >
      <form class="p-2 m-3 rounded">
        <h2 class="text-center">SignUp Form</h2>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            v-model="name"
            name="name"
            id="name"
            class="form-control"
            placeholder="Enter Name Here"
          />
          <span class="text-danger">{{ errorObj.name }}</span>
        </div>
        <div class="mb-3">
          <label for="panNumber" class="form-label">Pan Number</label>
          <input
            type="number"
            v-model="panNumber"
            name="panNumber"
            id="panNumber"
            class="form-control"
            placeholder="Enter Pan Number"
          />
          <span class="text-danger">{{ errorObj.panNumber }}</span>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <textarea
            class="form-control"
            v-model="address"
            name="address"
            placeholder="Enter Address Here"
            id="address"
            rows="3"
          ></textarea>
          <span class="text-danger">{{ errorObj.address }}</span>
        </div>
        <button
          type="submit"
          @click="handleSignUp"
          class="btn btn-primary btn-block w-100"
        >
          SignUp
        </button>
      </form>
    </div>
    <div class="col-12 mt-lg-5 col-lg-6 mx-auto my-2">
      <table v-if="status" class="table table-striped">
        <thead>
          <tr>
            <td>Name</td>
            <td>Pan Number</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userArr">
            <td>{{ user.name }}</td>
            <td>{{ user.panNumber }}</td>
            <td>{{ user.address }}</td>
          </tr>
        </tbody>
      </table>
      <h4 v-if="!status" class="mt-lg-5 text-center border border-primary">
        User Data Displays Here...
      </h4>
    </div>
  </div>

  <div v-if="registerStatus">
    <Login />
  </div>
</template>
