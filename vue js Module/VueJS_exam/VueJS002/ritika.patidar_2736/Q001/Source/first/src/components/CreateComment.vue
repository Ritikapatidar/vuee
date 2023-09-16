<script setup>
import { ref, watchEffect, computed } from "vue";
import { useRoute } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

import getData from "../composable/apiData.js";
const route = useRoute();
let url = ref("https://jsonplaceholder.typicode.com/comments");
const { data, error, postD } = getData();
const commentDataArr = ref([]);
const commentData = ref({ postId: route.params.postID, name: "", email: "", body: "" });
const rules = computed(() => {
  return {
    name: { required },
    email: {
      required: helpers.withMessage("Please fill your email address!", required),
      email: helpers.withMessage("Invalide emai!! ", email),
    },
    body: { required },
  };
});
const v$ = useVuelidate(rules, commentData);

async function CreateComment() {
  let result = await v$.value.$validate();
  if (result) {
    postD(url.value, commentData);
    commentDataArr.value.push(commentData.value);
    await localStorage.setItem("CommentData", JSON.stringify(commentDataArr.value));
    alert("Data inserted successfully!!");
    commentData.value = { postId: route.params.postID, name: "", email: "", body: "" };
  }
  commentData.value.title = "";
  commentData.value.body = "";
}
</script>
<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-12 col-md-6 m-auto">
        <div class="card">
          <form>
            <h2 class="text-center">Create Comment</h2>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                v-model="commentData.name"
                class="form-control"
                placeholder="Name"
              />
              <div v-for="error in v$.name.$errors">
                <span class="text-danger">{{ error.$message }}</span>
              </div>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                v-model="commentData.email"
                class="form-control"
                placeholder="Email"
              />
              <div v-for="error in v$.email.$errors">
                <span class="text-danger">{{ error.$message }}</span>
              </div>
            </div>

            <div class="mb-3">
              <label for="body" class="form-label">Comment</label>
              <textarea
                class="form-control"
                name="body"
                id="body"
                v-model="commentData.body"
                rows="3"
                placeholder="Post"
              ></textarea>
              <div v-for="error in v$.body.$errors">
                <span class="text-danger">{{ error.$message }}</span>
              </div>
            </div>

            <button class="m-auto d-block" @click.prevent="CreateComment">
              Create Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
