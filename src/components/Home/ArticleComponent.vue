<script>

export default {
  props: {
    article: Object
  },
};
</script>

<template>
  <div class="p-1">
    <div class="border bg-white p-2 myItem">
      <h2 class="title" :style="{color: titleColor}">
        {{article.title}}
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur dicta dignissimos dolorem doloremque dolorum expedita facere iure magni maiores molestias nulla quod saepe sed, similique sunt, velit, voluptate voluptatem?
      </p>
    </div>
  </div>

</template>

<script setup>
import {getRandomColor} from "@/components/Home/ColorGetter";
import {ref} from "vue";

const titleColor = ref(getRandomColor());
</script>

<style scoped>


</style>