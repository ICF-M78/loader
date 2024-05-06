import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';

const rs = [
    {
        path: '/',
        component: Main,
    },
] as RouteRecordRaw[];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: rs,
});

export default router;
