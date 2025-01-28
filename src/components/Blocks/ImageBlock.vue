<template>
  <div
    class="w-full"
    :style="{
      backgroundColor: item.backgroundColor,
    }"
  >
    <img
      :src="item.src"
      :alt="item.alt || 'Image'"
      :style="{
        minWidth: item.width + 'px',
        height: item.height + 'px',
        borderRadius: item.borderRadius + 'px',
        border: item.border + 'px ' + ' solid ' + item.borderColor,
      }"
      class="w-full"
    />
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
