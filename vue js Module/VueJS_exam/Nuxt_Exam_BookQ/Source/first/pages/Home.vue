<script setup>
import { useBookStore } from '../stores/bookStore';
const store = useBookStore()
let arr = ref([])

watchEffect(async () => {
    await store.getData('/api/subjects')
})

function handleSubject() {
    store.newBookList = []
    for (let i of store.selectedSubject) {
        let selected = store.bookList.filter((book) => {
            return book.subjectId == i
        })
        store.newBookList = [...store.newBookList, ...selected]
    }
    if (store.selectedSubject.length == 0) {
        store.newBookList = store.bookList
    }
}

function handleDelete(item) {
    let rest = store.newBookList.filter((i) => i !== item)
    store.newBookList = rest
}

function handleUpdate(item) {
    store.updateData = store.newBookList.find((i) => i == item)
    let rest = store.newBookList.filter((i) => i !== item)
    store.newBookList = rest
    return navigateTo('/edit/addBook')
}
definePageMeta({
    middleware: 'auth'
})


</script>
<template>
    <div class="container" style="margin-top:4rem;">
        <div class="row my-2">
            <div class="col-12 col-sm-3 position-fixed h-100 overflow-y-hidden">
                <h4>Search</h4>
                <div class="card p-4 my-2 border-info border-2" style="height: 90vh">
                    <p class="text-info border-bottom border-info pb-1">Subjects</p>
                    <ul>
                        <li v-for="subject of store.allData.value">
                            <Checkbox :handleSubject="handleSubject" :id="subject.id" :label="subject.name" />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-sm-8" style="margin-left: 35%">
                <h4>Books</h4>
                <div class="card border-info p-4 my-2" v-for="book of store.filteredData">
                    <div class="card-heading">
                        <h4> Book Id: {{ book.id }}</h4>
                    </div>
                    <div class="card-body py-1">
                        <p class="card-text my-1"><strong>Name: </strong>{{ book.name }}</p>
                        <p class="card-text my-1"><strong>Description: </strong>{{ book.description }}</p>
                        <p class="card-text my-1"><strong>Subject Id: </strong>{{ book.subjectId }}</p>
                    </div>
                    <div class="card-body py-1">
                        <button class="btn btn-info border border-secondary me-2" @click="handleUpdate(book)">Edit</button>
                        <button class="btn btn-danger border border-secondary" @click="handleDelete(book)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>