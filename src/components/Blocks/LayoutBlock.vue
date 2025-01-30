<template>
  <div class="">
    <div
      class=""
      :style="{
        backgroundColor: block.backgroundColor,
        borderRadius: block.borderRadius + 'px',
        border: block.border + 'px ' + ' solid ' + block.borderColor,
        padding: block.paddingY + 'px' + ' ' + block.paddingX + 'px',
      }"
      @click.self="pageBuilderStore.setIsEdittingBlock(block, index)"
    >
      <draggable
        :disabled="!pageBuilderStore.editorMode"
        class="dragArea list-group w-full grid gap-10 items-center justify-center"
        :class="{
          'grid-cols-2': ['layoutType1', 'layoutType3', 'layoutType4'].includes(block.layoutType),
          'grid-cols-1': block.layoutType === 'layoutType2',
        }"
        :list="block.items"
      >
        <div v-for="(item, idx) in block.items" :key="idx" class="">
          <div
            class="w-full"
            :class="{
              'cursor-move': pageBuilderStore.editorMode,
              'border-dashed border-[0.5px] border-amber-950 p-2':
                pageBuilderStore.editorMode &&
                item.uuid === pageBuilderStore.getIsEdittingBlock?.uuid,
            }"
          >
            <ImageBlock
              v-if="item.blockType === 'image'"
              :block="item"
              :index="idx"
            />
            <TextBlock
              v-if="item.blockType === 'text'"
              :block="item"
              :index="idx"
            />
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { usePageBuilderStore } from "../../stores/pagebuilderstore";
import { VueDraggableNext as draggable } from "vue-draggable-next";
import ImageBlock from "./ImageBlock.vue";
import TextBlock from "./TextEditorBlock.vue";

const pageBuilderStore = usePageBuilderStore();

const props = defineProps({
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
