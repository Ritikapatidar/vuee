<script setup>
import { ref } from "vue";
import {getAllUserData, DeleteUsers, Delerror, DelStatus} from '../composable/ApiData.js'
// import {paginationFunc} from '../composable/pagination.js'

let url=ref("https://gorest.co.in/public/v2/users")
// paginationFunc();

const {userData, getAllData, Geterror}=getAllUserData(url);
async function handleDelete(id){
if(confirm("Are you Sure, You want to delete this record?"))
{
await DeleteUsers(url, id)
await getAllData();
}
}
</script>

<template>
  <div v-if="Geterror" class="alert alert-danger mb-0">
    <strong>Oops!</strong> {{Geterror.message}}
  </div>
  <div v-if="!userData && !Geterror">Loading...</div>
  <div v-if="userData">
  <h2 class="text-center bg-dark text-light m-0">User Data</h2>
  <div class="table-responsive">
    <table class="table table-info table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Status</th>
                <th scope="col">Edit</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in userData">
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.gender}}</td>
            <td>{{user.status}}</td>
             <td><router-link :to="{name:'UpdateUser', params:{ id: user.id } }"><i class="bi bi-pencil-fill p-2"></i></router-link>
            <span @click="handleDelete(user.id)"><i class="bi bi-archive-fill p-2 text-danger"></i></span></td>
            </tr>
        </tbody>
    </table>


    <div v-if="Delerror" class="alert alert-danger mb-0">
      <strong>Unable to delete!</strong> {{Delerror}}
    </div>
    <div v-if="DelStatus===204 " class="alert alert-danger mb-0">
      Data Deleted Successfully
    </div>
   
    <div v-else></div>

  </div>
  </div>
</template>
