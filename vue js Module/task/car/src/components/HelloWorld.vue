<script setup>
import { ref,reactive, computed } from 'vue'

const data= reactive(
   [ {start:1, end:5}, {start:6, end:10}, {start:11, end:15}, {start:16, end:20} ]
)
const carNumber=ref('')
const sNo=ref(null)
const arrivalTime=ref(null)
const clickArr=reactive([])
let inArr=reactive([])
let insertStatus= ref(false)
let outArr=reactive([])
let inArrItem=ref([])
let displayStatus=ref(false)
// const today=new Date();
// const inputTime=new Date(arrivalTime.value);
// console.log("current time: ", today.getHours() +':' +today.getMinutes());

function handleCar(param) {
  sNo.value=param;
  console.log("click array: ", clickArr, sNo.value);
}

function add() {
  if (!inArr.find(e => e.sNo === sNo.value) && !sNo.value==0) 
  {
 inArr.push({sNo:sNo.value, carnumber:carNumber.value, time:arrivalTime.value})
 insertStatus.value=true;
 console.log("In array: ", inArr);
 inArrItem.value=inArr.map((i)=> i.sNo)
 console.log("In array sNo: ", inArrItem.value);
 sNo.value=null
 carNumber.value=''
 arrivalTime.value=''
 }
}
async function remove(){
    displayStatus.value=true
    let removeObj=inArr.find((i)=> i.sNo == sNo.value)
    outArr.push(removeObj)

    let removeArr=inArr.filter((i)=>i.sNo !== sNo.value)
    let removeItem= inArrItem.value.filter((i)=> i !== sNo.value)
    inArrItem.value=removeItem
    inArr=removeArr;
    console.log("After cancel item ",inArrItem.value);
    console.log("After cancel inArr ", inArr);
  }

const findCarNumber= (sNo)=>{
  let carNum= inArr.find((i)=> i.sNo == sNo)
  return (carNum.carnumber)+" " +carNum.time
}
const getDuration=(time)=>
{
  const date=new Date()
  let t=time.split(':')
  let hours= date.getHours()-t[0]
  let minutes= date.getMinutes()-t[1]
return hours+":"+minutes
}
</script>

<template>
<div class="container mx-auto mt-5">
<p><strong>Total Allocated: </strong>{{inArrItem.length}} <strong>Empty: </strong>{{20-inArrItem.length}} </p>
<table class="table table-bordered border border-dark">
  <tbody>
   <tr v-for="(i, index) in data">
   <td v-for="(j, colIndex) in i.end-i.start+1" @click="handleCar(i.start+colIndex)" data-bs-toggle="modal" data-bs-target="#exampleModal" 
   :class="(inArrItem.includes(i.start+colIndex)) ? 'bg-success' : 'bg-light'"
     >{{i.start+colIndex}}
      <template v-if="inArr.find((p)=>(p.sNo)==(i.start+colIndex))">{{findCarNumber(i.start+colIndex)}}</template>
      </td>
   </tr>
  </tbody>
</table>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
        <input type="text" placeholder="Car number" v-model="carNumber" />
        <input type="time" placeholder="Time" v-model="arrivalTime" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" :data-bs-dismiss="insertStatus ? 'null' : 'modal'" @click="add()" >In</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  @click="remove()">Out</button>
      </div>
    </div>
  </div>
</div>
<div v-show="displayStatus" class="m-auto">
<h2>Leave History</h2>
<table class="table table-bordered">
<thead>
<tr><th>Car No.</th><th>Duration</th><th>Price</th></tr>
</thead>
<tbody>
<tr v-for="i in outArr"><td>{{i.carnumber}}</td><td>{{getDuration(i.time)}}</td><td>ghg</td></tr>
<!-- <tr v-for="i in inArr"><td>{{i.carnumber}}</td><td>{{(today.getHours() + ":" + today.getMinutes())- i.time}}</td><td>ghg</td></tr> -->
</tbody>
</table>
</div></div>
</template>

