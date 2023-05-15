<script setup>
import {Average, Grade} from '../Logics/calculateData.js'
const props=defineProps(['item'])
</script>
<template>
<td>{{item.StudentName}}</td><td>{{item.Hindi}}</td><td>{{item.English}}</td><td>{{item.Math}}</td><td>{{Average(item)}}</td><td>{{Grade(item)}}</td>
</template>