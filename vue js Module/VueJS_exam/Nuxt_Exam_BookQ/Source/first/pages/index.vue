<script setup>
import { useBookStore } from '../stores/bookStore.js'
import { required, helpers, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { ref, computed } from 'vue'
const store = useBookStore()
const userName = ref('')
const password = ref('')

const rules = computed(() => {
    return {
        userName: {
            required: helpers.withMessage("Username Required !", required)
        },
        password: {
            required: helpers.withMessage("Password Required !", required),
            minLength: helpers.withMessage("Password must contain atleast 6 character !", minLength(6))
        }
    }
})
const v$ = useVuelidate(rules, { userName, password })
async function handleLogin() {
    let res = await v$.value.$validate()
    await store.getData('/api/loginData')
    console.log(store.allData.value);
    let user = store.allData.value.find((u) => u.name == userName.value && u.password == password.value)
    if (res) {
        if (user) {
            localStorage.setItem('LoginUserData', JSON.stringify(user))
            return navigateTo('/Home')
        }
        else{
            alert("Invalid Username/password !")
        }
    }
}
definePageMeta({
    middleware: 'auth',
    layout: false
})
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 m-auto my-5">
                <div class="card p-4" style="background-color: rgb(176, 195, 212);">
                    <h2 class="text-center">Login Form</h2>
                    <form>
                        <div class="form-group my-3">
                            <input type="text" class="form-control form-control-lg fs-6" v-model="userName"
                                placeholder="Enter Username Here..">
                            <span class="text-danger" v-for="error in v$.userName.$errors">{{ error.$message }}</span>
                        </div>
                        <div class="form-group my-3">
                            <input type="text" class="form-control form-control-lg fs-6" v-model="password"
                                placeholder="Enter password Here..">
                            <span class="text-danger" v-for="error in v$.password.$errors">{{ error.$message }}</span>
                        </div>
                        <button class="btn btn-success d-block m-auto mt-4" @click.prevent="handleLogin">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
body{
    background-color: aliceblue;
}
</style>