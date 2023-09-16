<script setup>
const props= defineProps(['item', 'fullName'])
</script>
<template>
  <td>{{props.fullName(props.item)}}</td>
              <td>{{ item.email }}</td>
              <td>
                {{ item.building }}, {{ item.area }},
                {{ item.state }}, {{ item.city }}
              </td>
              <td>{{ item.gender }}</td>
              <td>{{ item.skills }}</td>
              <td>{{ item.tenthmarks }}</td>
              <td>{{ item.tenthgrade }}</td>
              <td>{{ item.tenthyear }}</td>
              <td>{{ item.twelthmarks }}</td>
              <td>{{ item.twelthgrade }}</td>
              <td>{{ item.twelthyear }}</td>
              <td>{{ item.degreemarks }}</td>
              <td>{{ item.degreegrade }}</td>
              <td>{{ item.degreeyear }}</td>
</template>