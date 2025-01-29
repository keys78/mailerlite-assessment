<template>
  <draggable
    class="dragArea list-group 767:grid grid-cols-1 gap-3 flex items-center overflow-auto max-w-[100%]"
    :list="pageBuilderStore.builderLayouts"
  >
    <div
      class="cursor-move"
      v-for="(element, index) in pageBuilderStore.builderLayouts"
      :key="index"
      @dragstart="handleDragStart($event, element)"
      draggable="true"
    >
      <SvgIcons
        :name="element.iconName"
        :width="element.iconWidth"
        :height="element.iconHeight"
        class="border border-gray-200 rounded-[6px]"
      />
    </div>
  </draggable>
</template>

<script lang="ts" setup>
import SvgIcons from "../../assets/icons/SvgIcons.vue";
import { VueDraggableNext as draggable } from "vue-draggable-next";
import { usePageBuilderStore } from "../../stores/pagebuilderstore";

const pageBuilderStore = usePageBuilderStore()

// Make the items draggable by adding draggable data
const handleDragStart = (event: DragEvent, item: any) => {
  event.dataTransfer?.setData("item", JSON.stringify(item));
};
</script>
