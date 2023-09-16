<script setup>
import getApiData from '../composable/apiData.js'
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {getCart} from '../composable/cart.js'

const cartArr=getCart()

const router=useRouter();
const props=defineProps(['likeArrLen', 'name'])

const cartStatus=ref(false)
const url = ref("https://fakestoreapi.com/products");
const categoryArr=ref([])
const { getData, data, error } = getApiData();

const asyncFuncion = async () => {
  await getData(url.value);
  categoryArr.value = [...new Set(data.value.map((item) => item.category))];
  console.log(categoryArr);
};
asyncFuncion();

function LogOut(){
  localStorage.clear();
  router.push('/')
}

</script>
<template>
  <nav class="navbar navbar-expand-md">
    <div class="container-fluid">
      <p class="navbar-brand text-uppercase fs-3 text-success fw-bolder">
      {{props.name}}
      </p>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav m-auto d-flex justify-content-around mt-2 mt-lg-0 w-100">
          <li class="nav-item" v-for="item in categoryArr">
            <router-link
              class="nav-link fs-5 mx-1 text-light"
              :to="{ name: 'Category', params: { category: item } }"
              >{{ item.toUpperCase() }}</router-link
            >
          </li>
           <router-link
            :to="{ name: 'AddCartList' }"
            class="text-light"
            >
            <span class="text-light">{{ cartArr.length }}<i class="bi bi-cart-plus fs-5"></i></span
          >
          </router-link>

          <span class="text-light">{{ props.likeArrLen }}<i class="bi bi-heart-fill fs-5"></i></span>
        </ul>
      </div>
          <button class="btn-success p-2"> <span class="nav-item fs-5 mx-1 text-light" @click="LogOut">Logout</span></button>
    </div>
  </nav>
  <!-- <div v-if="cartStatus">{{cartArr}}</div> -->
</template>