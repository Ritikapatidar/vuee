<script setup>
import { ref, onMounted } from "vue";
import getData from "../composable/getData.js";
import { addCart } from "../composable/cart.js";
import { pagination } from "../composable/pagination.js";
import { getCart } from "../composable/cart.js";
import CardsList from "./CardsList.vue";

const likeArr = ref([]);
let data = getCart();
const {
  curPage,
  totalPage,
  pageSize,
  newRideData,
  showPrevLink,
  showNextLink,
  updateData,
  updateVisibleData,
} = pagination();
updateVisibleData();

function handleLike(item) {
  if (!likeArr.value.includes(item)) {
    likeArr.value.push(item);
  } else {
    let unLike = likeArr.value.filter((i) => i !== item);
    likeArr.value = unLike;
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-sm border border-bottom-dark">
    <div class="container">
      <p class="display-5 fw-bold my-auto">All Rides</p>

<!-- Pagination -->
      <ul class="pagination mt-4 m-auto justify-content-center" v-if="totalPage > 0">
        <li class="page-item" v-if="showPrevLink()" @click="updateData(curPage - 1)">
          <span class="page-link">Prev</span>
        </li>
        <li class="page-item disabled" v-else>
          <span class="page-link disabled">Prev</span>
        </li>

        <li class="page-item" v-for="i in 2">
          <span class="page-link" @click="updateData(i - 1)">{{ i }}</span>
        </li>

        <li class="page-item" v-if="showNextLink()" @click="updateData(curPage + 1)">
          <span class="page-link">Next</span>
        </li>
        <li class="page-item disabled" v-else><span class="page-link">Next</span></li>
      </ul>
<!-- Pagination -->



      <p class="mb-0 mt-3">
        <router-link v-if="data.length > 0" to="/Checkout" class="nav-link fs-5 text-dark"
          >{{ data.length }}<i class="bi bi-cart-plus fs-4"></i
        ></router-link>
        <span v-else class="nav-link fs-5 text-dark"
          >{{ data.length }}<i class="bi bi-cart-plus fs-4"></i
        ></span>
      </p>

      <span class="nav-link fs-5 mt-3 text-dark"
        >{{ likeArr.length }}<i class="bi bi-heart-fill fs-5"></i
      ></span>
    </div>
  </nav>

  <CardsList
    :newRideData="newRideData"
    :likeArr="likeArr"
    :data="data"
    :handleLike="handleLike"
    :addCart="addCart"
  />
</template>

<style>
.card {
  position: relative;
}
.heartIcon {
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>
