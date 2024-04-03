<template>
  <div class="row" v-if="writer">
    <div class="col-1">
      <img class="img-fluid rounded-5" src="https://upload.wikimedia.org/wikipedia/commons/4/42/Unknowcvcvc.jpg" alt="">
    </div>
    <div class="col-1 align-bottom">
      <h3>
        {{writer.username}}
      </h3>
    </div>
  </div>
</template>

<script >
export default {
  props: {
    writer: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>