<script setup>
const props=defineProps(['likes'])
</script>
<template>
  <table class="table table-bordered text-center">
        <thead class="bg-primary text-light">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Posted Date</th>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="l in props.likes">
            <td>{{ l.PostName }}</td>
            <td>{{ l.PostDescription }}</td>
            <td>{{ l.Date }}</td>
            <td>
              <img class="rounded-circle" height="80" width="80" :src="l.PostedImage" />
            </td>
          </tr>
        </tbody>
      </table>
</template>