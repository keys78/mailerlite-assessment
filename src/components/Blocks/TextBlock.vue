<template>
  <div contenteditable="true">
    <p>Hello Word</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  block: {
    type: Object,
    required: true,
  },
});
</script>

<style>

</style>