<script setup>
const props= defineProps(['data'])
</script>
<template>
 <h2 class="text-center">Total bill summary</h2>
      <div class="table-responsive">
      <table class="table table-bordered border-dark">
        <thead class="bg-dark text-light">
          <th>No.</th>
          <th>RideName</th>
          <th>RideImage</th>
          <th>Amount</th>
          <th>TimeSlot</th>
        </thead>
        <tbody>
          <tr v-for="(i, index) in props.data">
            <td>{{ index+1 }}</td>
            <td>{{ i.RideName }}</td>
            <td>{{ i.RideImage }}</td>
            <td>{{ i.Amount }}</td>
            <td>{{ i.time }}</td>
          </tr>
        </tbody>
      </table>
      </div>
</template>