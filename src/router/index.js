import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'
import ProfileView from '../views/ProfileView.vue'
import SettingsView from '../views/SettingsView.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: LoginView,
    },
    {
        path: '/main',
        component: MainView,
    },
    {
        path: '/profile',
        component: ProfileView,
    },
    {
        path: '/settings',
        component: SettingsView,
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
