<script setup>
import { ref,onMounted } from "vue";
import getAllUserData from "../composable/ApiData";
const {getAllData}= getAllUserData();
onMounted(getAllData)
</script>

<template>
  <h2 class="text-center bg-dark text-light m-0">User Data</h2>
  <div class="table-responsive">
    <table class="table table-info table-striped">
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
            
            </tr>
        </tbody>
    </table>
  </div>
  
</template>
