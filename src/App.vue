<script setup>

import Test2 from "@/components/Test2.vue";
import {computed, ref} from "vue";
import HomePage from "@/components/Home/HomePage.vue";
import TheWheelPage from "@/components/TheWheel/TheWheelPage.vue";
import PageNotFound from "@/components/Extras/PageNotFound.vue";
import TopHeader from "@/components/Shared/TopHeader.vue";
import Test from "@/components/Test.vue";
import SecretSatanPage from "@/components/SecretSatan/SecretSatanPage.vue";

const routes = {
  '/': HomePage,
  '/TheWheel': TheWheelPage,
    '/SecretSatan': SecretSatanPage,
  '/Test': Test
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
  <header>
    <TopHeader/>
  </header>

  <main>
    <component :is="currentView" />
  </main>
</template>

<style scoped>

</style>
