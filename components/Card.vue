<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "test"
  },
  value: {
    type: Number,
    required: true,
    default: 0
  }
})
</script>

<template>
  <div style="border: 2px solid #212e42; border-radius: 12px; padding: 16px; margin: 0px; background-color: #000; color: #FFF;">
    <p style="font-size: 10px; margin: 0px;">{{ title }}</p>
    <p style="font-size: 20px; margin: 5px 0px 0px 0px;">{{ value }}</p>
  </div>
</template>

<style scoped>

</style>