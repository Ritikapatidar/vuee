<script setup>
import router from "../router";
function Logout() {
  localStorage.removeItem("loginInfo");
  router.push("/");
}
</script>
<template>
  <nav class="navbar navbar-expand-sm navbar-light" style="background-color: #3b8b98e6">
    <div class="container">
      <a class="navbar-brand text-light fs-2" href="#">WELCOME</a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav w-100 justify-content-center mt-2 mt-lg-0 text-center">
          <li class="nav-item mx-2">
            <button class="py-1 px-3">
              <router-link class="nav-link text-light" :to="{ name: 'CreatePost' }"
                >Create Post</router-link
              >
            </button>
          </li>
          <li class="nav-item mx-2">
            <button class="py-1 px-3">
              <router-link class="nav-link text-light" :to="{ name: 'Posts' }"
                >Get Post</router-link
              >
            </button>
          </li>
          <!-- <li class="nav-item">
            <button class="py-1 px-3">
              <router-link class="nav-link text-light" :to="{ name: 'Comments' }"
                >All Comments</router-link
              >
            </button>
          </li> -->
        </ul>
        <button class="btn-success" @click="Logout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
