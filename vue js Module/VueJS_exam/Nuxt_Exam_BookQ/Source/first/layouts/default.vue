<script setup>
import { useBookStore } from '../stores/bookStore.js'
const store = useBookStore()
function handleLogout() {
    localStorage.removeItem('LoginUserData')
    return navigateTo('/')
}
</script>
<template>
    <div>
        <nav class="navbar navbar-expand-md bg-success text-light fixed-top">
            <div class="container">
                <span class="navbar-brand fs-4 fw-bold">BOOKS</span>
                <button class="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <em class="bi bi-justify text-light"></em>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <NuxtLink class="nav-link text-light mx-3 fs-5" to="/Home" aria-current="page">Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link text-light mx-3 fs-5" to="/addBook" aria-current="page">Add Book
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="d-flex">
                    <div class="input-group m-auto">
                        <em class="bi bi-search input-group-text text-success"></em><input type="text" class="form-control"
                            v-model="store.search" placeholder="Search By Book Name..." />
                    </div>
                    <p class="text-center border py-1 px-2 rounded fs-5 m-auto text-warning ms-2" @click="handleLogout">Logout</p>
                </div>
            </div>
        </nav>

        <slot />
    </div>
</template>