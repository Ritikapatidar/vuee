<script setup>
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import { ref, reactive, computed } from "vue";
import Login from "./Login.vue";
const router = useRouter(); 

const userObj=ref({
  name:'',
  panNumber:'',
  address:''
})
const userArr = reactive([])

//
const rules=computed(()=>{
return{  name: { required, minLength:minLength(3) },
  panNumber: { required },
  address: { required },
}
})
const v$= useVuelidate(rules, userObj)
//

async function handleSignUp(e) {
  let res=await v$.value.$validate();
   if(res){
    userArr.push({userObj});
    userObj.name = "";
    userObj.email = "";
    userObj.address = "";
    router.push('/login');
    }
}
</script>
<template>
  <div class="row mt-5">
    <div
      class="col-12 text-white shadow-1-strong rounded col-sm-8 col-lg-6 mx-auto my-2"
      style="
        background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/003.webp');
        opacity: 0.8;
      "
    >
      <form class="p-2 m-3 rounded">
        <h2 class="text-center">SignUp Form</h2>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            v-model="userObj.name"
            name="name"
            id="name"
            class="form-control"
            placeholder="Enter Name Here"
          />
          <div v-for="error in v$.name.$errors">
          <span v-if="v$.name.required" class="text-danger">Please enter your name</span>
          <!-- <span v-if="v$.name.minLength" class="text-danger">Name should contain atleast 3 characters</span> -->
          </div>
        </div>
        <div class="mb-3">
          <label for="panNumber" class="form-label">Pan Number</label>
          <input
            type="number"
            v-model="userObj.panNumber"
            name="panNumber"
            id="panNumber"
            class="form-control"
            placeholder="Enter Pan Number"
          />
          <div v-for="error in v$.panNumber.$errors"><span v-if="v$.panNumber.required" class="text-danger"> Pan number required </span></div>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <textarea
            class="form-control"
            v-model="userObj.address"
            name="address"
            placeholder="Enter Address Here"
            id="address"
            rows="3"
          ></textarea>
         <div v-for="error in v$.address.$errors"> <span class="text-danger">{{ error.$message }}</span></div>
        </div>
        <button
          type="submit"
          @click.prevent="handleSignUp"
          class="btn btn-primary btn-block w-100"
        >
          SignUp
        </button>
          <router-link class="fs-5" to="/login">Login</router-link>
      </form>
    </div>
  </div>
</template>
