import { createRouter, createWebHistory} from "vue-router";
import Student from '../components/student.vue'
import Fees from '../components/Fees.vue'
import Result from '../components/Result.vue'
import NotFound from '../components/NotFound.vue'
import StudentDetail from '../components/studentDetail.vue'
const routes=[
    {
        path:'/',
        name:'App',
        component:app,
    },
    {
        path:'/Students',
        name:'Student',
        component:Student,
        children:[
            {
                path:'StudentDetail/:id',
                name:'StudentDetail',
                component:StudentDetail,
            },
            {
                path:'StudentDetail/:Sid/Fees',
                name:'Fees',
                component:Fees,
            },
            {
                path:'StudentDetail/:Sid/Result',
                name:'Result',
                component:Result,
            },
            {
                path:'/:catchAll(.*)',
                name:'NotFound',
                component:NotFound
            },
        ],
    },
]
const router=createRouter({
    history:createWebHistory(),
    routes,
})
export default router;