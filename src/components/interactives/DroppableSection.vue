<template>
  <div class="border rounded-[5px] bg-white w-full h-full p-2">
    Droppable Space

    <!-- Droppable Area -->
    <div
      class="droppable-area p-5 mt-5 h-auto min-h-screen border-dashed border"
      @drop.prevent="handleDrop"
      @dragover.prevent
      @dragenter.prevent
    >
      <p class="text-center">Drop Here</p>
      <div v-if="pageBuilderStore.getAllBuilderBlocks?.length">
        <draggable class="dragArea list-group w-full" :list="pageBuilderStore.getAllBuilderBlocks">
          <div v-for="(item, index) in pageBuilderStore.getAllBuilderBlocks" :key="item.uuid">
            <div class="cursor-move my-4" :class="{'border-dashed border-[0.5px] border-amber-950 p-2' : item.uuid === pageBuilderStore.getIsEdittingBlock?.uuid}">
              <div class="z-10 flex items-center justify-end gap-4" v-if="item.uuid === pageBuilderStore.getIsEdittingBlock?.uuid">
                <p class="bg-white p-2 w-auto cursor-pointer" @click="pageBuilderStore.deleteBlockFromBuilder(index)">Delete</p>
                <p class="bg-white p-2 w-auto cursor-pointer" @click="pageBuilderStore.duplicateBlockInBuilder(index)">Duplicate</p>
              </div>
              <ImageBlock :item="item" @click="pageBuilderStore.setIsEdittingBlock(item)" />
            </div>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePageBuilderStore } from "../../stores/pagebuilderstore";
import ImageBlock from "../../components/Blocks/ImageBlock.vue";
import { VueDraggableNext as draggable } from "vue-draggable-next";

const pageBuilderStore = usePageBuilderStore();

const handleDrop = (event: DragEvent) => {
  const droppedItem = event.dataTransfer?.getData("item");
  if (droppedItem) {
    pageBuilderStore.addBlockToBuilder(JSON.parse(droppedItem));
  }
};
</script>

<style scoped>
.droppable-area {
  border-color: #bbb;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
}

.droppable-area:hover {
  background-color: #f0f0f0;
}
</style>
