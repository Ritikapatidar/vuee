<script setup>
import { ref, reactive, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
import getApiData from "../composable/apiData.js";
const route = useRoute();
const { data, getData, error } = getApiData();

watchEffect(() =>
  getData(`https://fakestoreapi.com/products/category/${route.params.category}`)
);

</script>

