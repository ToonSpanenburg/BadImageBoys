<script setup>

import {computed, ref} from "vue";
import HomePage from "@/components/Home/HomePage.vue";
import TheWheelPage from "@/components/TheWheel/TheWheelPage.vue";
import PageNotFound from "@/components/Extras/PageNotFound.vue";
import TopHeader from "@/components/Shared/TopHeader.vue";
import Footer from "@/components/Shared/Footer.vue";
import ExperimentPage from "@/components/Experiment/ExperimentPage.vue";
import ArticlePage from "@/components/Article/ArticlePage.vue";


const routes = [
  {path: '/', component: HomePage},
  {path: '/TheWheel', component: TheWheelPage},
  {path: '/Experiment', component: ExperimentPage},
  {path: '/article/:id', component: ArticlePage },
]

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  const path = currentPath.value.slice(1)
  const route = routes.find(route => route.path === path)
  return route ? route.component : PageNotFound
})

</script>

<template>
  <div class="bg-black mx-auto">
    <div class="d-flex justify-content-center">
      <div class="w-75">
        <header>
          <TopHeader/>
        </header>

        <main>
          <component :is="currentView" />
        </main>

      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>

</style>
