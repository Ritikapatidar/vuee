export default defineNuxtRouteMiddleware((to, from)=>{
    if(to.path == '/' && localStorage.getItem('LoginUserData'))
    {
        return navigateTo('/Home')
    }
     if(to.path !== '/' && !localStorage.getItem('LoginUserData'))
    {
        return navigateTo('/')
    }
})