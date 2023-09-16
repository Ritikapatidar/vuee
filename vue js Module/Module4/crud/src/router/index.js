import { createRouter, createWebHistory } from 'vue-router'
import CreateUser from '../components/CreateUser.vue'
import UpdateUser from '../components/UpdateUser.vue'
import NotFound from '../components/NotFound.vue'

const routes=[
    {
        path:'/',
        component:app,
        name:"app"
    },
            {
                path:'/CreateUser',
                component:CreateUser,
                name:"CreateUser"
            },
            {
                path:'/UpdateUser/:id',
                component:UpdateUser,
                name:"UpdateUser"
            },
            {
                path:'/:catchAll(.*)',
                component:NotFound,
            }
]
const router=createRouter({
    history:createWebHistory(), routes
})

export default router;