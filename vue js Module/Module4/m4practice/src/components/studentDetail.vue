<template>
  <div class="container">
    <button class="btn btn-success m-2 p-1">
      <router-link
        class="nav-link text-light"
        :to="{ name: 'Fees', params: { Sid: $route.params.id } }"
        >Fees</router-link
      >
    </button>
    <button class="btn btn-success m-2 p-1">
      <router-link
        class="nav-link text-light"
        :to="{ name: 'Result', params: { Sid: $route.params.id } }"
        >Result</router-link
      >
    </button>
    <router-view />
  </div>
</template>
