<script setup>
import {reactive, ref, computed} from 'vue';
import ProductList from './ProductList.vue'
import prData from './productData.json'

let data=reactive(prData)
let netP=ref(null)
let P=ref([])
let newProductData=ref({})
// const netPrice=()=>{
//     P=data.product.map((item)=>{
//         return item.Price-(item.Price)*5*(1/100);
//     })
//     return P;
// }

// const newData=computed(()=>{
//     netPrice();
//     let d= P.map((item)=>{
//          newProductData= data.product.map((i)=>{
//             return {...i, "netPrice":item}
//         })
//     })
//     return newProductData;
// })


</script>

<template>
 <ProductList :prData="data" :payableAmount="P" />
</template>