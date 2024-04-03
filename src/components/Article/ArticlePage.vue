<template>
  <div class="text-white">
    <h1>
      {{myArticle.id}}
    </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur, debitis distinctio enim eveniet, explicabo labore, maiores nostrum quam quo sunt tempora vero voluptatem. Dicta distinctio optio quasi sunt tempore.
    </p>
  </div>
</template>

<script>
import ArticleComponent from "@/components/Home/ArticleComponent.vue";
import {onMounted, ref} from "vue";
import * as api from "@/components/api";

let routeId = ref();
const myArticle = ref({});
export default {
  beforeRouteEnter(to, from, next) {
    routeId = to.params.id;
    next();
  },

  components: {ArticleComponent},
  setup() {
    onMounted(async () => {
      try {
        const article = await api.getData("article/" + routeId);
        myArticle.value = article;
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