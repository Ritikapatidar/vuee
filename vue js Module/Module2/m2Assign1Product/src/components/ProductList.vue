<script setup>
const prop=defineProps(['prData', 'payableAmount'])
</script>

<template>
<div class="row">
<div class="col-sm-6 col-lg-3 my-1" v-for="(product,key) in prop.prData.product">
<div class="card">
 <img class="card-img-top" height="200" :src="product.image" alt="Title" />
    <div class="card-body">
        <h4 class="card-title">{{product.ProductName}}</h4>
         <p class="card-text">{{product.description}}</p>
        <p class="card-text"> <span class="fw-bold">Price:</span> ${{product.Price}}</p>
          <p class="card-text"> <span class="fw-bold">Quantity:</span> {{product.Quantity}}</p>
            <p class="card-text"> <span class="fw-bold">Payable Amount:</span> <span class="text-decoration-line-through">${{product.Price}}</span> <span class="fw-bold fs-5">${{product.Price-(product.Price*5/100)}}</span></p>
  </div>    </div>  </div>
</div>
</template>
