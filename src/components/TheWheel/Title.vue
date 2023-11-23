<template>
  <h1 class="m-5 text-center" :class="{ 'text-success': isBlue }">
    {{title}}
  </h1>
</template>


<script setup>
const props = defineProps({
  title: String,
  isBlue : Boolean
})

</script>

<style scoped>

</style>