<script setup>

import Test2 from "@/components/Test2.vue";
import {computed, ref} from "vue";
import HomePage from "@/components/Home/HomePage.vue";
import TheWheelPage from "@/components/TheWheel/TheWheelPage.vue";
import PageNotFound from "@/components/Extras/PageNotFound.vue";
import TopHeader from "@/components/Shared/TopHeader.vue";
import Test from "@/components/Test.vue";
import Footer from "@/components/Shared/Footer.vue";

const routes = {
  '/': HomePage,
  '/TheWheel': TheWheelPage,
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
  <div class="bg-black">
    <header>
      <TopHeader/>
    </header>

    <main>
      <component :is="currentView" />
    </main>
    <Footer/>
  </div>
</template>

<style scoped>

</style>
