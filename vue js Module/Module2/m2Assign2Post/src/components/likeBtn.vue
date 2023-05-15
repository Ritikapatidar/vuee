<!-- <script setup>
import {ref} from 'vue'
const props=defineProps(['id'])
const likeIcon = ref(false);

function handleLike(id) {
  let likeObj = props.data.Posts.find((item) => item.Id == id);
  console.log(likeObj);
  if (!LikeArr.includes(likeObj)) {
    LikeArr.push(likeObj);
  }
  props.likeFunction(LikeArr);
  console.log("df");
}
</script>
<template>
<span @click="handleLike(props.Id)">
            <i class="bi bi-heart text-end d-block"></i>
             <i :class="likeIcon ? 'bi bi-heart-fill text-end d-block' : 'bi bi-heart text-end d-block'"></i> 
          </span> 
</template> -->