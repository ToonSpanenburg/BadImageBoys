<template>
  <div v-if="writer">
    <p>
      {{writer.username}}
    </p>
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