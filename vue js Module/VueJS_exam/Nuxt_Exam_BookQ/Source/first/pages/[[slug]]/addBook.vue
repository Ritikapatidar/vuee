<script setup>
import {useBookStore} from '../../stores/bookStore.js'
const route=useRoute()
const store= useBookStore()
let bookName= ref('')
let bookDesc= ref('')
let bookSubject= ref('')

await store.getData('/api/subjects')
async function handleAddBook()
{
    const BookObj= { name:bookName, description:bookDesc, subjectId: bookSubject }
    store.newBookList.push(BookObj)
    return navigateTo('/Home')
}
definePageMeta({
    middleware: 'auth'
})

if(route.params.slug)
{
    bookName= store.updateData.name
    bookDesc= store.updateData.description
    bookSubject= store.updateData.subjectId
}
</script>
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 m-auto my-4">
                <div class="card p-4 bg-light">
                    <h2 class="text-center">Add Book</h2>
                    <form>
                        <div class="form-group my-3">
                            <input type="text" class="form-control form-control-lg fs-6" v-model="bookName" placeholder="Enter Book Name">
                        </div>
                        <div class="input-group my-3">
                            <input type="text" class="form-control form-control-lg fs-6" v-model="bookDesc" placeholder="Enter book description Here..">
                        </div>
                        <div class="input-group my-3">
                          <select class="form-select" v-model="bookSubject">
                            <option value="" selected disabled>Select subject</option>
                            <option v-for="subject of store.allData.value" :value="subject.id">{{subject.name}}</option>
                          </select>
                          </div>
                        <button class="btn btn-success d-block m-auto mt-4" @click.prevent="handleAddBook "> {{ route.params.slug ? 'Update Book' : 'Add Book' }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>