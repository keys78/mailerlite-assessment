<template>
  <div class="border rounded-[5px] bg-white w-full h-full p-2">
    Previewer
    <!-- Droppable Area -->
    <div
      class=" p-5 mt-5 h-auto min-h-screen"
    >
      <p class="text-center">Drop Here</p>
      <div v-if="pageBuilderStore.getAllBuilderBlocks?.length">
        <div
          v-for="(item, index) in pageBuilderStore.getAllBuilderBlocks"
          :key="item.uuid"
        >
          <div
            class=" my-4"
          >
            <ImageBlock
              v-if="item.blockType === 'image'"
              :block="item"
              @click="pageBuilderStore.setIsEdittingBlock(item, index)"
            />
            <LayoutBlock
              v-if="item.blockType === 'layout'"
              :block="item"
              @click="pageBuilderStore.setIsEdittingBlock(item, index)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePageBuilderStore } from "../stores/pagebuilderstore";
import ImageBlock from "../components/Blocks/ImageBlock.vue";
import LayoutBlock from "../components/Blocks/LayoutBlock.vue";
import { VueDraggableNext as draggable } from "vue-draggable-next";

const pageBuilderStore = usePageBuilderStore();
</script>

<style scoped></style>
