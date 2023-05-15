<script setup>
import { ref, reactive } from "vue";
const prop = defineProps(["data", "likeFunction"]);
const LikeArr = reactive([]);
// const likeIcon = ref(false);

function handleLike(id) {
  let likeObj = prop.data.Posts.find((item) => item.Id == id);
  console.log(likeObj);
  if (!LikeArr.includes(likeObj)) {
    LikeArr.push(likeObj);
  }
  prop.likeFunction(LikeArr);
}
</script>

<template>
  <template v-for="d in prop.data">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(post, id) in d" :key="id">
      <div class="card bg-light">
        <img class="card-img-top" height="170" :src="post.PostedImage" alt="Title" />
        <div class="card-body">
          <h4 class="card-title">{{ post.PostName }}</h4>
          <p class="card-text">{{ post.PostDescription }}</p>
          <p class="card-text">{{ post.Date }}</p>
        </div>
        <div class="card-footer">
          <span @click="handleLike(post.Id)">
            <i class="bi bi-heart text-end d-block"></i>
             <!-- <i :class="likeIcon ? 'bi bi-heart-fill text-end d-block' : 'bi bi-heart text-end d-block'"></i>  -->
          </span>
        </div>
      </div>
    </div>
  </template>
</template>
