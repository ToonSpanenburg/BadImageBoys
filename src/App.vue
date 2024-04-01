<script setup>
import TopHeader from "@/components/Shared/TopHeader.vue";
import Footer from "@/components/Shared/Footer.vue";
</script>

<template>
  <div class="bg-black mx-auto">
    <div class="d-flex justify-content-center">
      <div class="w-75">
        <header>
          <TopHeader/>
        </header>
        <main>
          <router-view />
        </main>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>

</style>
