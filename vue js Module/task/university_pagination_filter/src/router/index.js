import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Create from '../components/Create.vue'
// import Get from '../components/Get.vue'
import Pagination from '../components/Get_Pagination.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/Home/:role',
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'Create/:upStatus?',
                name: 'Create',
                component: Create
            },
            // {
            //     path: 'Get',
            //     name: 'Get',
            //     component: Get
            // }
            {
                path: 'Pagination',
                name: 'Pagination',
                component: Pagination
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(), routes
})

let user = JSON.parse(localStorage.getItem('loginData'));
router.beforeEach((to, from) => {
    if (to.name !== 'Login' && !localStorage.getItem('loginData')) {
        router.push({ name: 'Login' })
        return false;
    }
    else if (to.name == 'Login' && localStorage.getItem('loginData')) {
        router.push(`/Home/${user.role}`)
        return false;
    }
    else {
        return true;
    }
})

export default router;