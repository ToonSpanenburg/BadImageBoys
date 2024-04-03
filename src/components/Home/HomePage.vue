<template>
  <div class="container">
    <search-component/>
    <div class="row">
      <div v-for="article in myArticles" class="col-6 p-3">
        <router-link class="routerLink" :to="{ name: 'article', params: { id: article.id }}" tag="div">
          <ArticleComponent class="myItem" :article="article"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as api from "@/components/api";
import ArticleComponent from "@/components/Home/ArticleComponent.vue";

export default {
  components: {ArticleComponent},
  setup() {
    const myArticles = ref([]);

    onMounted(async () => {
      try {
        const articles = await api.getData("");
        myArticles.value = articles;
        console.log("these are my articles: "+ myArticles.value);

      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    });

    return {
      myArticles
    };
  }
};
</script>

<style scoped>
.routerLink
{
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}
.myItem
{
  color: inherit;
  text-decoration: none;
  text-underline: none;
  transition: all 0.3s ease;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
.myItem:hover
{
  border-right-color: yellow;
  border-bottom-color: yellow;
}
</style>