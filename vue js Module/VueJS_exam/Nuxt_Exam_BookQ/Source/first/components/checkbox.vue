<script setup>
import { useBookStore } from '../stores/bookStore';
const store = useBookStore()
const props = defineProps(['label', 'id', 'modelValue', 'handleSubject'])
</script>

<template>
    <input @change="props.handleSubject($event)" type="checkbox" :value="id" v-model="store.selectedSubject" :id="id" :name="label">
    <label class="ms-2" :for="id">{{ label }}</label>
</template>