import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/components/Home/HomePage.vue";
import TheWheelPage from "@/components/TheWheel/TheWheelPage.vue";
import ExperimentPage from "@/components/Experiment/ExperimentPage.vue";
import ArticlePage from "@/components/Article/ArticlePage.vue";
import PageNotFound from "@/components/Extras/PageNotFound.vue";


const routes = [
    { path: '/', component: HomePage },
    { path: '/TheWheel', component: TheWheelPage },
    { path: '/Experiment', component: ExperimentPage },
    { path: '/article/:id', name: 'article', component: ArticlePage },
    { path: '/:catchAll(.*)', component: PageNotFound }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
