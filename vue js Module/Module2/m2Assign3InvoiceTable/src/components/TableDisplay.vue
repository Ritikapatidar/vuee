<script setup>
import { ref, computed } from 'vue'
import info from '../data.json'

let sum=ref(null);
let arr=ref([]);

const total=()=>{
     arr=info.ItemDetails.map((item)=>{
        return parseInt( item.Amount.slice(1) )
    })
    return arr;
}
const func=computed(()=>{
   total();
   let s= arr.map((i)=>{
       return sum.value=sum.value+i;
    })
    return sum.value;
})
</script>

<template>
<div class="container">
<div class="row">
<div class="col-sm-6 m-auto">
<h1 class="text-center">Invoice</h1>
</div>
<div class="col-sm-6">
<p class="text-end m-1" v-for="(item, key) in info.SellerDetails">{{key}}: {{item}}</p>
</div>
</div>

<div class="row">
<div class="col m-auto">
<table class="table table-bordered">
<tbody>
<tr><td colspan="3">Company Name: {{info.BuyerDetails.CompanyName}}</td><td colspan="3">INVOICE#</td></tr>
<tr><td colspan="3"> Name: {{info.BuyerDetails.Name}}</td><td colspan="3">123456</td></tr>
<tr><td colspan="3"> Address: {{info.BuyerDetails.Address}}</td><td colspan="3">DATE</td></tr>
<tr><td colspan="3">City, State, Zip: {{info.BuyerDetails.City}} {{info.BuyerDetails.State}} {{info.BuyerDetails.Zip}}</td><td colspan="3">14/03/2023</td></tr>
<tr><td colspan="3">Phone: {{info.BuyerDetails.Phone}}</td><td colspan="3">Invoice Due Date</td></tr>
<tr><td colspan="3">Email: {{info.BuyerDetails.Email}}</td><td colspan="3">14/03/2023</td></tr>
<tr><td colspan="6"></td></tr>

<tr><th>ITEMS</th><th>DESCRIPTION</th><th>QUANTITY</th><th>PRICE</th><th>TAX</th><th>AMOUNT</th></tr>
<template v-for="(item) in info.ItemDetails">
<tr>
<td v-for="(data,key) in item">{{data}}</td>
</tr>
</template>
<tr rowspan="2" class="text-end"><td colspan="6" class="fs-4">TOTAL: {{func}}</td></tr>
</tbody>
</table>
</div>
</div>
</div>
</template>
