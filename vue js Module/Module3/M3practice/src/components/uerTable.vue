<script setup>
import { ref,reactive } from 'vue'
const userData=reactive([]);
const userDataObj=reactive({});
const id=ref(null);
const name=ref('');
const address=ref('');

function validate(){
  let flag=true;
  if(!id.value)
  {
    alert("Please fill id");
    flag=false;
  }
  else if(!name.value)
  {
    alert("Please fill name");
    flag=false;
  }
 else if(!address.value)
  {
    alert("Please fill address");
    flag=false;
  }
 else if(flag){
    return true;
  }
  else{
    return false;
  }
}

const submitData=()=>{
  if(validate())
  {
userDataObj.value={UserId:id.value, Name:name.value, Address:address.value}
userData.push(userDataObj.value)
id.value=""
name.value=""
address.value=""
  }

}
</script>

<template>
<div class="row mt-5">
<div class="col-12 col-sm-8 col-md-7 col-lg-5 m-auto rounded" style="background-image:url('https://images.unsplash.com/photo-1625225230517-7426c1be750c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcm18ZW58MHx8MHx8&w=1000&q=80') ">
<form class="rounded p-2">
<h2 class="text-center text-dark mb-4">User Profile Form</h2>
  <!-- Name input -->
  <div class="form-outline mb-4">
    <input type="text" id="id" class="form-control" v-model="id" placeholder="Enter User Id" />
  </div>

  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="email" id="name" class="form-control" v-model="name"  placeholder="Enter User Name" />
  </div>

  <!-- Message input -->
  <div class="form-outline mb-4">
    <textarea class="form-control" id="address" rows="4" v-model="address"  placeholder="Enter User's Address" ></textarea>
  </div>

  <!-- Submit button -->
  <button type="submit" @click.prevent="submitData" class="btn btn-secondary w-100 btn-block mb-4">SUBMIT</button>
</form>
</div>

<table v-if="userData.length>0" class="table table-bordered text-center">
<thead class="bg-dark text-light">
<tr>
<th>UserId</th><th>User Name</th><th>Address</th>
</tr>
</thead>
<tbody>
<tr v-for="i of userData">
<td v-for="(value, key) in i">{{value}}</td>
</tr>
</tbody>
</table>
    </div>
  
</template>
