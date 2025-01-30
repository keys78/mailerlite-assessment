<template>
  <div
    class="w-[100%] flex items-center justify-center"
    :style="{
      backgroundColor: block.backgroundColor,
      borderRadius: block.borderRadius + 'px',
      border: block.border + 'px ' + ' solid ' + block.borderColor,
      padding: block.paddingY + 'px' + ' ' + block.paddingX + 'px',
    }"
      @click.stop="pageBuilderStore.setIsEdittingBlock(block, index)"
  >
    <img
      :src="block.src"
      :alt="block.alt || 'Image'"
      :style="{
        width: block.width + 'px',
        height: block.height + 'px',
        borderRadius: block.borderRadius + 'px',
      }"
      class="w-full"
    />
  </div>
</template>

<script lang="ts" setup>
import { usePageBuilderStore } from "../../stores/pagebuilderstore";

const pageBuilderStore = usePageBuilderStore()
defineProps({
  block: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>



