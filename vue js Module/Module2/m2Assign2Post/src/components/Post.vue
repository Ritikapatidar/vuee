<script setup>
import { ref, reactive } from "vue";
import postData from "../postData.json";
import PostList from "./PostList.vue";
import LikedPosts from "./LikedPosts.vue";

let likes = reactive([]);
let numberOfLikes = ref(0);
const likeStatus = ref(false);

function likeFunction(like) {
  likes = like;
  numberOfLikes.value = like.length;
  console.log(likes, "likes");
}
function displayLike() {
  likeStatus.value = true;
}
</script>

<template>
  <div class="row">
    <p>
      <a class="text-decoration-none fs-5" href="#" @click="displayLike"
        >Likes<i class="bi bi-heart-fill"></i>: {{ numberOfLikes }}</a
      >
    </p>

    <div v-if="likeStatus && numberOfLikes>0" class="my-5">
      <h3>Liked Posts</h3>
      <LikedPosts :likes="likes" />
    </div>

      <PostList :likeFunction="likeFunction" :data="postData" />

  </div>
</template>
