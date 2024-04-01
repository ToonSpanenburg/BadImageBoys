<script>

export default {
  props: {
    article: Object
  },
};
</script>

<template>
  <div class="p-1 myArticle">
    <div class="border bg-white pt-2 ps-2 pe-1 pb-1 myItem">
      <h2 class="title" :style="{color: titleColor}">
        {{article.title}}
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur dicta dignissimos dolorem doloremque dolorum expedita facere iure magni maiores molestias nulla quod saepe sed, similique sunt, velit, voluptate voluptatem?
      </p>
      <div class="row">
        <div class="col-6">
          <a href="">
            {{article.writer.username}}
          </a>
        </div>
        <div class="col-6 text-end">
          {{DateFormatter(article.releaseDate)}}
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {getRandomColor} from "@/components/Home/ColorGetter";
import {ref} from "vue";

const titleColor = ref(getRandomColor());

function DateFormatter(date)
{
  //this will be presented in the one and only correct time notation
  //day/month/year
  const toBeFormatted = new Date(date);
  const newDate = toBeFormatted.getFullYear() + " - "
      + toBeFormatted.getMonth().toString().padStart(2, '0') + " - " + toBeFormatted.getDay().toString().padStart(2, '0');
  return newDate;
}
</script>

<style scoped>
a
{
  color: black;
  text-decoration: none;
}
.myArticle:hover
{
  cursor: pointer;
}
</style>