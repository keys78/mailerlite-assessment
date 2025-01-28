<template>
  <div
    class="w-full"
    :style="{
      backgroundColor: item.backgroundColor,
      borderColor: item.borderColor,
      borderRadius: item.borderRadius,
      borderWidth: item.borderColor ? '1px' : '0',
      borderStyle: 'solid',
    }"
  >
    <img
      :src="item.src"
      :alt="item.alt || 'Image'"
        :style="{ minWidth: item.width + 'px', height: item.height + 'px' }"
        class="w-full" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
