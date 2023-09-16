<script setup>
import {getCart} from '../composable/cart.js'
let carts= getCart();
</script>
<template>
 <section class="main mt-0">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mb-3" v-for="item in carts">
          <div class="card">
            <img
              class="card-img-top position-relative"
              :src="item.image"
              :alt="item.name"
              height="350"
            />
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
          </div>
        </div>
      </div>
    </div>
  </section> 
</template>