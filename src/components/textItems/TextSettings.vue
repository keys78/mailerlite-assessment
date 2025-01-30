<template>
  <div>
    <div
      class="dragArea list-group 767:grid grid-cols-2 gap-1 flex items-center overflow-auto max-w-[100%]"
      :list="pageBuilderStore.builderTextTypes"
    >
      <div
        class="px-1"
        v-for="(element, index) in pageBuilderStore.builderTextTypes"
        :key="index"
        @dragstart="handleDragStart($event, element, index)"
        draggable="true"
      >
        <button
          class="cursor-move rounded-[6px] capitalize w-full text-center flex items-center space-x-3 my-1 border border-[var(--borderOne)] text-[var(--accent1B)] p-2"
        >
          <span>
            <SvgIcon :name="element.iconName" width="18" height="18"
          /></span>
          <span> {{ element.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageBuilderStore } from "../../stores/pagebuilderstore";
import SvgIcon from "../../assets/icons/SvgIcons.vue";

const pageBuilderStore = usePageBuilderStore();

// Make the items draggable by adding draggable data
const handleDragStart = (event: DragEvent, item: any, index: any) => {
  event.dataTransfer?.setData("item", JSON.stringify(item));
  event.dataTransfer?.setData("item-index", JSON.stringify(index));
};
</script>
