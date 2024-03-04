<script setup>

import {computed, ref} from "vue";
import HomePage from "@/components/Home/HomePage.vue";
import TheWheelPage from "@/components/TheWheel/TheWheelPage.vue";
import PageNotFound from "@/components/Extras/PageNotFound.vue";
import TopHeader from "@/components/Shared/TopHeader.vue";
import Footer from "@/components/Shared/Footer.vue";
import ExperimentPage from "@/components/Experiment/ExperimentPage.vue";

const routes = {
  '/': HomePage,
  '/TheWheel': TheWheelPage,
  '/Experiment':ExperimentPage,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || PageNotFound
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
