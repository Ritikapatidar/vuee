import {createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import CreatePost from '../components/CreatePost.vue'
import Posts from '../components/Posts.vue'
import CreateComment from '../components/CreateComment.vue'
import Comments from '../components/Comments.vue'

const routes=[
    {
        path:'/',
        name:'Login',
        component:Login
    },
    {
        path:'/Home/:id',
        name:'Home',
        component:Home,
        children:[
            {
                path:'CreatePost',
                name:'CreatePost',
                component:CreatePost
            },
            {
                path:'Posts',
                name:'Posts',
                component:Posts
            },
            {
                path:'CreateComment/:postID',
                name:'CreateComment',
                component:CreateComment
            },
            {
                path:'Comments/:postID',
                name:'Comments',
                component:Comments
            }
        ]
    }
]
const router= createRouter({
    history: createWebHistory(), routes
})

router.beforeEach((to, from)=>{
    let user=(localStorage.getItem('loginInfo'))
    if(to.name !== "Login" && !localStorage.getItem('loginInfo'))
    {
        router.push('/')
        return false;
    }
    if(to.name == "Login" && localStorage.getItem('loginInfo'))
    {
        router.push(`/Home/${JSON.parse(user).id}`)
        return false;
    }
    else{
        return true;
    }
})
export default router;