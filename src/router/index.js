import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomePage from '../components/HomePage.vue'
const SecPage = () => import('../components/SecPage.vue')

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/SecPage', name: 'SecPage', component: SecPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router