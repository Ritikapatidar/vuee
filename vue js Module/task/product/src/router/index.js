import {createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Category from '../components/Category.vue'
import Login from '../components/Login.vue'
import NotFound from "../components/NotFound.vue";
import AddCartList from "../components/AddCartList.vue";

const routes=[
    {
        path:'/',
        name:"Login",
        component: Login,
    },
    {
        path:'/Home/:name',
        name:"Home",
        component: Home,
        children:[
            {
                path:'Category/:category',
                name:"Category",
                component: Category
            },
        ]
    },
    {
        path:'/:catchAll(.*)',
        name:"NotFound",
        component:NotFound
    },
    {
        path: '/AddCartList',
        name:'AddCartList',
        component:AddCartList
    }
  
]
const router=createRouter({
    history: createWebHistory(), routes
})

export default router