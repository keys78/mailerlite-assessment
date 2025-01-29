<template>
  <div>
    <draggable
      class="dragArea list-group w-full grid grid-cols-2 gap-3"
      :list="pageBuilderStore.builderTextTypes"
    >
      <div
        class=""
        v-for="(element, index) in pageBuilderStore.builderTextTypes"
        :key="index"
        @dragstart="handleDragStart($event, element, index)"
        draggable="true"
      >
        <button
          class="cursor-move rounded-[6px] capitalize w-full text-center h-[60px] border mb-3 text-xl font-bold"
        >
          {{ element.name }}
        </button>
      </div>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VueDraggableNext as draggable } from "vue-draggable-next";
import { usePageBuilderStore } from "../../stores/pagebuilderstore";

const pageBuilderStore = usePageBuilderStore();

// Make the items draggable by adding draggable data
const handleDragStart = (event: DragEvent, item: any, index: any) => {
  event.dataTransfer?.setData("item", JSON.stringify(item));
  event.dataTransfer?.setData("item-index", JSON.stringify(index));
};
</script>
