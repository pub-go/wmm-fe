import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from '../page/Login.vue';

// 路由列表
const routes: RouteRecordRaw[] = [
    {
        path: "/login",
        name: '登录',
        component: Login
    },
]
// 路由设置
const router = createRouter({
    history: createWebHistory(),
    routes,
})
// 导航守卫
router.afterEach((to, from, failure) => {
    document.title = to.name?.toString() || document.title
})

export { router };
