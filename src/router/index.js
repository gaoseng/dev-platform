import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Login = () => import('../pages/login-page/login.page');
const HomePage = () => import ('../pages/home-page/home.page');

const constantRoutes = [
    {path: '/', redirect: 'home'},
    { 
        path: '/home', 
        component: HomePage 
    },
    {
        path: '/login',
        name: 'login',
         component: Login
    }
];

const router = new Router({
    routes: constantRoutes
});
router.beforeEach((to, from, next) => {
    to.name !== 'login'? next({path: '/login'}) : next();
    
});


export default router;