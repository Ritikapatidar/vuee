<script setup>
const props= defineProps(['newRideData', 'likeArr', 'data', 'handleLike', 'addCart']) 
</script>
<template>
 <div class="container-fluid main mx-auto p-0">
    <div class="row m-auto">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-1" v-for="item in props.newRideData">
        <div class="card bg-light">
          <i
            class="fs-5 text-warning heartIcon"
            :class="props.likeArr.includes(item) ? 'bi bi-heart-fill' : 'bi bi-heart'"
            @click="props.handleLike(item)"
          ></i>

          <img
            class="card-img-top"
            :src="item.RideImage"
            height="250"
            width="250"
            alt="Title"
          />
          <div class="card-body">
            <h4 class="card-title">{{ item.RideName }}</h4>
            <p class="card-text my-0"><strong>Amount: </strong> {{ item.Amount }}</p>
            <p class="card-text"><strong>Age Group: </strong> {{ item.AgeGroup }}</p>

            <button v-if="!props.data.includes(item)" @click="props.addCart(item)">
              Add To Cart
            </button>
            <button v-else class="bg-success" disabled>Added</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>