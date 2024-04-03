<template>
  <div class="text-white">
    <h1>
      {{myArticle.title}}
    </h1>
    <div>
      <writer-component :writer="myArticle.writer"/>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur, debitis distinctio enim eveniet, explicabo labore, maiores nostrum quam quo sunt tempora vero voluptatem. Dicta distinctio optio quasi sunt tempore.
    </p>
  </div>
</template>

<script>
import ArticleComponent from "@/components/Home/ArticleComponent.vue";
import {onMounted, ref} from "vue";
import * as api from "@/components/api";
import WriterComponent from "@/components/Article/WriterComponent.vue";

let routeId = ref();
const myArticle = ref({});
export default {
  beforeRouteEnter(to, from, next) {
    routeId = to.params.id;
    next();
  },

  components: {WriterComponent, ArticleComponent},
  setup() {
    onMounted(async () => {
      try {
        const article = await api.getData("article/" + routeId);
        myArticle.value = article;
        console.log(myArticle.value);
        console.log(myArticle.value.writer.username);
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