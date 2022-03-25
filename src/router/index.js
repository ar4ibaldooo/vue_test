import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";


const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/personals',
        name: "Personals",
        component: () => import('../views/Personals.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;