<template>
  <div class="">
    <div class="p-4"
      :style="{
        backgroundColor: block.backgroundColor,
        borderRadius: block.borderRadius + 'px',
        border: block.border + 'px ' + ' solid ' + block.borderColor,
      }"
    >
      <draggable
        class="dragArea list-group w-full grid gap-10 items-center justify-center"
        :class="{
          'grid-cols-2': block.layoutType === 'layoutType1',
          'grid-cols-1': block.layoutType === 'layoutType2',
        }"
        :list="block.items"
      >
        <div
          v-for="(item, index) in block.items"
          :key="index"
          class=""
        >
          <div
            class="w-full cursor-move my-4"
            :class="{
              'border-dashed border-[0.5px] border-amber-950 p-2':
                item.uuid === pageBuilderStore.getIsEdittingBlock?.uuid,
            }"
          >
            <ImageBlock
              v-if="item.blockType === 'image'"
              :block="item"
              @click.stop="pageBuilderStore.setIsEdittingBlock(item, index, block)"
            />
            <TextBlock
              v-if="item.blockType === 'text'"
              :block="item"
              @click.stop="pageBuilderStore.setIsEdittingBlock(item, index, block)"
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
import TextBlock from "./TextBlock.vue";

const pageBuilderStore = usePageBuilderStore();

const props = defineProps({
  block: {
    type: Object,
    required: true,
  },
});
</script>
