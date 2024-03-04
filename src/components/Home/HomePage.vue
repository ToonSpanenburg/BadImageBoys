<template>
  <div class="container">
    <div class="row">
      <search-component/>
      <div v-for="article in myArticles" class="col-6 p-3">

        <div class="card">
          <h2 class="">
            Test Thing
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur dicta dignissimos dolorem doloremque dolorum expedita facere iure magni maiores molestias nulla quod saepe sed, similique sunt, velit, voluptate voluptatem?
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import SearchComponent from "@/components/Home/SearchComponent.vue";

const testReactiveVar = ref('test');


const myArticles = [
  "The Wheel",
  "test",
  "test",
  "test",
  "test",
];

</script>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>