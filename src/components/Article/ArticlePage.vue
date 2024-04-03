<template>
  <div class="text-white">
    <h1>
      {{myArticle.title}}
    </h1>

    <div v-if="myArticle.videoLink">
      //this is a video
      {{myArticle}}
    </div>
    <div v-else>
      <div class="p-1">
        <ArticleTypeComponent :article="myArticle"/>
      </div>
    </div>

    <div class="bg-white text-black rounded-3 p-1 m-1">
      <writer-component :writer="myArticle.writer"/>
      <div>
        Release date: {{myArticle.releaseDate}}
      </div>
    </div>

  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import * as api from "@/components/api";
import WriterComponent from "@/components/Article/WriterComponent.vue";
import ArticleTypeComponent from "@/components/Article/ArticleTypeComponent.vue";

let routeId = ref();
const myArticle = ref({});
export default {
  beforeRouteEnter(to, from, next) {
    routeId = to.params.id;
    next();
  },

  components: {ArticleTypeComponent, WriterComponent},
  setup() {
    onMounted(async () => {
      try {
        const article = await api.getData("article/" + routeId);
        myArticle.value = article;
        console.log(myArticle.value);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    });
    return {
      myArticle
    };
  }
};
</script>

<style scoped>

</style>