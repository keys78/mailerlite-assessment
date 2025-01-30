<template>
  <div class="">
    <div
      class="w-[100%] flex items-center justify-center"
      :style="{
        backgroundColor: block.backgroundColor,
        borderRadius: block.borderRadius + 'px',
        border: block.border + 'px ' + ' solid ' + block.borderColor,
        padding: block.paddingY + 'px' + ' ' + block.paddingX + 'px',
        justifyContent: block.alignment
      }"
      @click.self="pageBuilderStore.setIsEdittingBlock(block, index)"
    >
      <draggable
        :disabled="!pageBuilderStore.editorMode"
       :class="[
          'dragArea list-group w-full grid gap-10 items-center justify-center',
          { '767:grid-cols-2 grid-cols-1': ['layoutType1', 'layoutType3', 'layoutType4'].includes(block.layoutType) },
          { 'grid-cols-1': block.layoutType === 'layoutType2' }
        ]"
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
              :layout="block"
            />
            <TextBlock
              v-if="item.blockType === 'text'"
              :block="item"
              :index="idx"
              :layout="block"
            />
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePageBuilderStore } from "../../stores/pagebuilderstore";
import { VueDraggableNext as draggable } from "vue-draggable-next";
import ImageBlock from "./ImageBlock.vue";
import TextBlock from "./TextEditorBlock.vue";

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
});
</script>
