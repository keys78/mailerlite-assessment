<template>
  <div
    :class="`image-block-wrapper w-[100%] flex items-center`"
    :style="{
      backgroundColor: block?.backgroundColor,
      border: block?.border + 'px ' + ' solid ' + block?.borderColor,
      padding: block?.paddingY + 'px' + ' ' + block?.paddingX + 'px',
      justifyContent: block?.alignment
    }"
    @click.stop="pageBuilderStore.setIsEdittingBlock(block, index, layout)"
  >
    <img
      :src="block?.src"
      :alt="block?.alt || 'Image'"
      :style="{
        width: block?.width + 'px',
        height: block?.height + 'px',
        borderRadius: block?.borderRadius + 'px',
      }"
      class="image-block-img w-full"
    />
  </div>
</template>

<script lang="ts" setup>
import { usePageBuilderStore } from "../../stores/pagebuilderstore";

const pageBuilderStore = usePageBuilderStore();
defineProps({
  block: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  layout: {
    type: Object,
    required: false,
  },
});
</script>
