<template>
  <div
    class="w-full"
    :style="{
      backgroundColor: block.backgroundColor,
    }"
  >
    <img
      :src="block.src"
      :alt="block.alt || 'Image'"
      :style="{
        maxWidth: block.width + 'px',
        height: block.height + 'px',
        borderRadius: block.borderRadius + 'px',
        border: block.border + 'px ' + ' solid ' + block.borderColor,
      }"
      class="w-full"
    />
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
