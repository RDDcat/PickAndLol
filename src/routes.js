import { createRouter, createWebHashHistory } from "vue-router";
// import MainPage from '@/views/MainPage'


import Test from '@/components/SampleComponent'
import Admin from '@/components/AdminComponent'
import MainPage from '@/components/RouteComponent'


const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        { path: "/admin", component: Admin},
        { path: "/test", component: Test},
        { path: "/", component: MainPage},


    ]
});

export default router;