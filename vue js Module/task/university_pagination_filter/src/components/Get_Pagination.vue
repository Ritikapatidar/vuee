<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import getData from "../composable/apiData.js";
import TableColumn from "./TableColumn.vue";
import paginationFunc from "../composable/Pagination.js";

const {
  showPreviosLink,
  updateVisibleData,
  showNextLink,
  updatePage,
  currentPage,
  pageSize,
  visibleData,
  totalPages,
} = paginationFunc();

const route = useRoute();
const { appFormDataArr, deleteUser, upadateUser, fullName } = getData();
let updatedItem = ref("");
let searchVal = ref("");

// Get Initial pagination data
updateVisibleData();

// Update table data and after this call pagination function to get data in pages
async function handleUpdate(item) {
  updatedItem.value = item;
  console.log("item", updatedItem.value);
  await upadateUser(updatedItem);
  // updateVisibleData();
}

// Filter data from table based on fullname and after this call pagination function to get data in pages
const filteredData = computed(() => {
  if (searchVal.value.length > 0) {
    return visibleData.value.filter((item) =>
      (item.fname + " " + item.mname + " " + item.lname)
        .trim()
        .toUpperCase()
        .includes(searchVal.value.toUpperCase())
    );
  }
  return visibleData.value;
});
</script>
<template>
  <div class="container">
    <div class="row">
      <!-- <Page :appFormDataArr="appFormDataArr" /> -->

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
              <!-- <template v-for="(item, index) in appFormDataArr"> -->
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

        <div class="row justify-content-center">
        <div class="col-4">
          <input
            type="text"
            class="form-control border border-success"
            placeholder="Search..."
            v-model="searchVal"
          />
        </div>
       <div class="col-4">
          <ul v-if="totalPages > 0" class="pagination">
            <li
              class="page-item"
              v-if="showPreviosLink()"
              @click="updatePage(currentPage - 1)"
            >
              <span class="page-link"> Previous</span>
            </li>
            <li class="page-item disabled" v-else>
              <span class="page-link"> Previous</span>
            </li>

            <li
              class="page-item d-flex"
              v-for="i of totalPages"
              @click="updatePage(i - 1)"
            >
              <span class="page-link">{{ i }}</span>
            </li>

            <li
              class="page-item"
              v-if="showNextLink()"
              @click="updatePage(currentPage + 1)"
            >
              <span class="page-link"> next</span>
            </li>
            <li class="page-item disabled" v-else>
              <span class="page-link"> next</span>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
