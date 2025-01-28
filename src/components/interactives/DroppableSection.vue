<template>
  <div class="border rounded-[5px] bg-white w-full h-full p-2">
    Droppable Space

    <!-- Droppable Area -->
    <div
      class="droppable-area border-dashed border-2 p-5 mt-5 h-auto"
      @drop.prevent="handleDrop"
      @dragover.prevent
      @dragenter.prevent
    >
      <p class="text-center">Drop Here</p>
      <div v-if="droppedItems.length">
        <draggable class="dragArea list-group w-full" :list="droppedItems">
          <div v-for="item in droppedItems" :key="item.uuid">
            <div class="cursor-pointer my-4">
              <ImageBlock :item="item" @click="pageBuilderStore.setIsEdittingBlock(item)" />
            </div>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { usePageBuilderStore } from "../../stores/pagebuilderstore";
import ImageBlock from "../../components/Blocks/ImageBlock.vue";
import { VueDraggableNext as draggable } from "vue-draggable-next";

const pageBuilderStore = usePageBuilderStore();
const droppedItems = ref<any[]>([]);

const handleDrop = (event: DragEvent) => {
  const draggedItemId = event.dataTransfer?.getData("item-id");
  if (draggedItemId) {
    const droppedItem = pageBuilderStore.getBuilderImages.find(
      (item: any) => item.uuid === draggedItemId
    );
    if (droppedItem) {
      droppedItems.value.push(droppedItem);
    }
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

.list-group-item {
  cursor: move;
}
</style>
