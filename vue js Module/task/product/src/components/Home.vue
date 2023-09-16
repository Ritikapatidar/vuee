<script setup>
import { ref, reactive, onMounted } from "vue";
import getApiData from "../composable/apiData.js";
import Navbar from "./Navbar.vue";
import {useRoute} from 'vue-router'
import {addCart} from '../composable/cart.js'

const routeParam=useRoute();
let categoryArr = ref([]);
const cartArr = reactive([]);
let likeArr = ref([]);
let likeArrLen = ref(0);
const url = ref("https://fakestoreapi.com/products");
const { getData, data, error } = getApiData();

const asyncFuncion = async () => {
  await getData(url.value);
  categoryArr.value = [...new Set(data.value.map((item) => item.category))];
  console.log(categoryArr);
};
asyncFuncion();

onMounted(()=>{
let user=localStorage.getItem('loginInfo');
if(!user){
  router.push('/');
}
})

////////////// Events
function handleAddLike(item) {
    if (!likeArr.value.includes(item)) {
      likeArr.value.push(item);
      likeArrLen.value=likeArrLen.value+1
      console.log("likeArr", likeArr);
    }
    else{
      let unLike =likeArr.value.filter((i) => i !== item);
      likeArr.value=unLike;
      likeArrLen.value=likeArrLen.value-1
      console.log("unLike", likeArr);
    }
}
////////////////////
</script>
<template>
<Navbar :name="routeParam.params.name"  :cartArr="cartArr" :likeArrLen="likeArrLen" />

  <section class="main">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mb-3" v-for="item in data">
          <div class="card">
            <img
              class="card-img-top position-relative"
              :src="item.image"
              :alt="item.name"
              height="350"
            />
            <span
              class="position-absolute"
              style="top: 8px; right: 16px"
              @click="handleAddLike(item)"
            >
              <i
                :class="(!likeArr.includes(item)) ? 'bi bi-heart' : 'bi bi-heart-fill'"
                class="text-warning"
              ></i>
            </span>
            <div class="card-body pb-0">
              <h4 class="card-title">{{ item.title }}</h4>
              <p class="card-text my-1">{{ item.description }}</p>
              <p class="card-text m-0">
                <span><strong>Category: </strong>{{ item.category }} </span>
              </p>
              <p class="card-text m-0">
                <span><strong>Price: </strong>{{ item.price }} </span>
              </p>
              <div class="d-flex justify-content-between">
                <p class="m-0"><strong>Rating: </strong>{{ item.rating.rate }}</p>
                <p class="m-0"><strong>Count: </strong>{{ item.rating.count }}</p>
              </div>
            </div>
            <div class="card-footer">
               <button
                class="bg-secondary text-light d-block m-auto"
                @click="addCart(item)"
              >
                <i class="bi bi-cart2 fs-5"></i> Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <router-view />
</template>

<style>
.card {
  height: 550px;
  overflow: scroll;
}
.navbar {
  position: fixed;
  width: 100%;
  overflow: hidden;
  top: 0;
  z-index: 1;
}
.main {
  background-color: #224d72bf;
  margin-top: 82px;
}
</style>