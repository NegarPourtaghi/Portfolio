import { createRouter  , createWebHistory} from 'vue-router'
import home from './Components/home.vue'
import about from './Components/about.vue'
import contact from './Components/contact.vue'
import portfolio from './Components/portfolio.vue'


const routes=[
    {path:'/', component:home},
    {path:'/about', component:about},
    {path:'/contact', component:contact},
    {path:'/portfolio', component:portfolio}

]




const router= createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'active',
})

 
router.beforeEach((to, from, next) => {
    if (to.matched.some(m => m.meta.requiresAuth) && store.state.token === null) {
        return next('/');
    } else {
        return next();
    }
});

export default router;