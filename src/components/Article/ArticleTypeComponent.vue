<template>
  <div class="container text-white">
    <div class="">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Beautiful_landscape.JPG" class="img-fluid rounded-2">
    </div>
    <div>
      {{article.description}}
    </div>
  </div>
</template>

<script >
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.img-container
{
  width: inherit;
}
</style>