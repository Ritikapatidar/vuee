import { createRouter, createWebHistory } from 'vue-router'
import users from '../components/users.vue'
import todos from '../components/todos.vue'
import posts from '../components/posts.vue'

const routes = [
    {
        path: '/',
        component: app,
        name: "App"
    },
    {
        path: '/users',
        component: users,
        name: "users",
        children: [
            //     {
            //         path:":id/posts",
            //         name:"posts",
            //         component: posts
            //     },
            {
                path: ":id/todos",
                name: "todos",
                component: todos
            },
        ]
    },
    {
        path: "/users/:id/posts",
        name: "posts",
        component: posts
    },
]
const router = createRouter({
    history: createWebHistory(), routes
})
export default router;