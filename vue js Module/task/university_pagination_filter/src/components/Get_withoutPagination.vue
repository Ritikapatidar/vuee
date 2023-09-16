<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import getData from "../composable/apiData.js";
import TableColumn from "./TableColumn.vue";
const route = useRoute();
const { appFormDataArr, deleteUser, upadateUser, fullName } = getData();
let updatedItem = ref("");
let searchVal = ref("");

// Update data
async function handleUpdate(item) {
  updatedItem.value = item;
  console.log("item", updatedItem.value);
  await upadateUser(updatedItem);
}

// filter data from table
const filteredData = computed(() => {
  if (searchVal.value.length > 0) {
    return appFormDataArr.value.filter((item) =>
      (item.fname + " " + item.mname + " " + item.lname)
        .trim()
        .toUpperCase()
        .includes(searchVal.value.toUpperCase())
    );
  }
  return appFormDataArr.value;
});

</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>FullName</th>
              <th>Email ID</th>
              <th>Address(Building, Area, State, City)</th>
              <th>Gender</th>
              <th>Skills</th>
              <th>10th Marks</th>
              <th>10th Grade</th>
              <th>10th Passing Year</th>
              <th>12th Marks</th>
              <th>12th Grade</th>
              <th>12th Passing Year</th>
              <th>Degree Marks</th>
              <th>Degree Grade</th>
              <th>Degree Passing Year</th>
              <th v-if="route.params.role == 'admin'">Edit</th>
            </tr>
          </thead>

          <tbody>
            <template v-for="(item, index) in filteredData">
              <tr v-if="item.tenthmarks > 80 && item.twelthmarks > 80" class="bg-success">

                <TableColumn :item="item" :fullName="fullName" />

                <td v-if="route.params.role == 'admin'" class="d-flex">
                  <button class="bg-transparent p-0" @click="deleteUser(item)">
                    <i class="bi bi-archive-fill text-danger fs-4"></i>
                  </button>
                  <button class="bg-transparent p-0" @click="handleUpdate(item)">
                    <i class="bi bi-pencil-square text-primary fs-4"></i>
                  </button>
                </td>
              </tr>

              <tr v-else class="bg-light">

                <TableColumn :item="item" :fullName="fullName" />
                
                <td v-if="route.params.role == 'admin'" class="d-flex">
                  <button class="bg-transparent p-0" @click="deleteUser(item)">
                    <i class="bi bi-archive-fill text-danger fs-4"></i>
                  </button>
                  <button class="bg-transparent p-0" @click="handleUpdate(item)">
                    <i class="bi bi-pencil-square text-primary fs-4"></i>
                  </button>
                </td>
              </tr>
            </template>
          </tbody>
        </table>

        <div>
          <input type="text" class="form-controle" v-model="searchVal" />
        </div>
      </div>
    </div>
  </div>
</template>
