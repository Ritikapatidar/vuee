<script setup>
import { ref } from 'vue'
import {reactive,computed} from 'vue';
import {Average, Grade} from '../Logics/calculateData.js'
import TableColumn from './TableColumn.vue';
const students=reactive([{"StudentName":"Rahul","Hindi":60,"English":90,"Math":100},
{"StudentName":"Rohit","Hindi":60,"English":85,"Math":60},
{"StudentName":"Ronit","Hindi":40,"English":90,"Math":89},
{"StudentName":"meghna","Hindi":30,"English":20,"Math":20},
{"StudentName":"roy","Hindi":100,"English":100,"Math":100}
])
</script>
<template>

<table class="table table-bordered my-4">
<thead class="bg-dark fs-5 text-light">
<tr><th>Name</th><th>Hindi</th><th>English</th><th>Math</th><th>Arerage</th><th>Grade</th></tr>
</thead>
<tbody v-for="item of students">

<tr v-if="Grade(item)=='A'" style="background-color:darkGreen">
<TableColumn :item="item" />
</tr>

<tr v-else-if="Grade(item)=='B'" style="background-color:lightGreen">
<TableColumn :item="item" />
</tr>

<tr v-else-if="Grade(item)=='C'" style="background-color:Yellow">
<TableColumn :item="item" />
</tr>

<tr v-else-if="Grade(item)=='D'" style="background-color:Red">
<TableColumn :item="item" />
</tr>

</tbody>
</table>


</template>