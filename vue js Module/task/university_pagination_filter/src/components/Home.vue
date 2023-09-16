<script setup>
import { onMounted, watchEffect, ref } from "vue";
import { useRoute } from "vue-router";
import router from '../router'
const route = useRoute();
import getData from "../composable/apiData.js";
const stateValue = ref("");
const { StateToCity, getD, data, findStates, findCities } = getData();

watchEffect(() => {
  getD("/data.json");
});

function logout() {
  localStorage.removeItem('loginData');
  router.push('/')
}
</script>
<template>
  <div class="container-fluid main">
    <div class="row bg-info py-2">
      <nav class="navbar navbar-expand-sm">
        <div class="container">
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="">
              <button class="p-1 mx-3">
                <router-link class="nav-link text-light" :to="{ name: 'Create' }"
                  >Create</router-link
                >
              </button>
              <!-- <button class="p-1 mx-3"><router-link class="nav-link text-light" :to="{name:'Get'}">Get Data</router-link></button> -->
              <button class="p-1 mx-3">
                <router-link class="nav-link text-light" :to="{ name: 'Pagination' }"
                  >Get Data</router-link
                >
              </button>
            </ul>
            <div class="ms-auto">
            <button class=" mx-3 bg-success text-light" @click="logout">Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="row text-center">
      <h4>Cities in perticular state</h4>
      <p class="m-0" v-for="item in data.States">
        {{ item.StateName }}: {{ StateToCity(item.StateID, data.Cities) }}
      </p>
    </div>

    <div class="text-center my-2 d-flex justify-content-center">
      <div>
        <h4>State DropDown,</h4>
        <select class="form-control w-100 m-auto mb-2" v-model="stateValue">
          <option value="" selected disabled>Select State</option>
          <template v-for="item in data.States">
            <option :value="item.StateID">{{ findStates(item) }}</option>
          </template>
        </select>
      </div>

      <!-- <div><h4>State DropDown</h4>
     <select class="form-control w-100 m-auto mb-2">
     <option value="" selected disabled>Choose</option>
     <option>{{findCities(data.Cities, stateValue)}}</option>
     </select></div>
    </div>{{stateValue}} -->

      <div>
        <h4>City DropDown</h4>
        <select class="form-control w-100 m-auto mb-2">
          <option value="" selected disabled>Select City</option>
          <template v-for="city in data.Cities">
            <option v-if="city.StateID == stateValue">{{ city.Name }}</option>
            <!-- <option v-if="city.StateID==stateValue">{{findCities(data.Cities, stateValue)}}</option> -->
          </template>
        </select>
      </div>
    </div>

    <div class="row">
      <router-view />
    </div>
  </div>
</template>
