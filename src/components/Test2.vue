<template>
  <div>
    <h2>
      parent to child info stuff
    </h2>
    <TestComp :msg="greeting"/>
  </div>
  <div>
    <h2>
      child to parent info stuff
    </h2>
    <test-comp2 @response="(msg) => childMsg = msg" />
    <p>{{ childMsg }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TestComp from "@/components/TestComp.vue";
import TestComp2 from "@/components/TestComp2.vue";


const greeting = ref('Hello from parent')

const childMsg = ref('No child msg yet')
</script>
<script>
export default {
  name: "Test2"
}
</script>

<style scoped>

</style>