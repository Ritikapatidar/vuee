<script setup>
import { ref, watchEffect, computed } from "vue";
import { useRoute } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

import getData from "../composable/apiData.js";
const route = useRoute();
let url = ref("https://jsonplaceholder.typicode.com/posts");
const { data, error, postD } = getData();
const postedData = ref([]);
const postData = ref({ userId: route.params.id, title: "", body: "" });
const rules = computed(() => {
  return {
    title: { required: helpers.withMessage("Name cannot be empty", required)},
    body: { required },
  };
});
const v$ = useVuelidate(rules, postData);

async function CreatePost() {
  let result = await v$.value.$validate();
  if (result) {
    postD(url.value, postData);
    await postedData.value.push(postData.value);
    await localStorage.setItem("PostData", JSON.stringify(postedData.value));
    alert("Data inserted successfully!!");
    postData.value = { userId: route.params.id, title: "", body: "" };
  }
}
</script>
<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-12 col-md-6 m-auto">
        <div class="card">
          <form>
            <h2 class="text-center">Create Post</h2>
            <div class="mb-3">
              <label for="title" class="form-label">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                v-model="postData.title"
                class="form-control"
                placeholder="Post Title"
              />
              <div v-for="error in v$.title.$errors">
                <span class="text-danger">{{ error.$message }}</span>
              </div>
            </div>
            <div class="mb-3">
              <label for="body" class="form-label">Post Content</label>
              <textarea
                class="form-control"
                name="body"
                id="body"
                v-model="postData.body"
                rows="3"
                placeholder="Post"
              ></textarea>
              <div v-for="error in v$.body.$errors">
                <span class="text-danger">{{ error.$message }}</span>
              </div>
            </div>

            <button class="m-auto d-block" @click.prevent="CreatePost">
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
