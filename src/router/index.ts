import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


const constantRoutes = [
    {path: '/', redirect: 'home'},
    { 
        path: '/home', 
        component: () => import ('../pages/home-page/home.page.vue') 
    },
    {
        path: '/login',
        name: 'login',
         component: () => import('../pages/login-page/login.page.vue')
    }
];

const router = new Router({
    routes: constantRoutes
});
router.beforeEach((to, from, next) => {
    to.name !== 'login'? next({path: '/login'}) : next();
    
});


export default router;