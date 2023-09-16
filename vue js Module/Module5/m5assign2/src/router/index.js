import {createRouter, createWebHistory} from 'vue-router'
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import Welcome from '../components/Welcome.vue'
import Post from '../components/Post.vue'
import Commentt from '../components/Comments.vue'

const routes=[
    {
        path: '/',
        component: SignUp,
        name:"SignUp"
    },
    {
        path: '/login',
        component: Login,
        name:'Login'
    },
    {
        path: '/profile/:id',
        component: Welcome,
        name:"welcome",
        children:[
            {
                path: 'posts',
                name:'post',
                component: Post
            },
            {
                path: 'comments/:postId',
                name:'Commentt',
                component: Commentt,
            }
        ]
    }
]
const router=createRouter({
history:createWebHistory(),routes
})
export default router;