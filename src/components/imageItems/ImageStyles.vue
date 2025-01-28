<template>
  <div>
    <div class="mb-4 flex items-center justify-between">
      <label>Alt Text:</label>
      <input
        type="text"
        placeholder="alt text"
        class="border p-2 w-[50%] rounded-md"
        v-model="pageBuilderStore.getIsEdittingBlock.alt"
      />
    </div>
    <div class="mb-4 flex items-center justify-between">
      <label>Width:</label>
      <input
        type="number"
        min="50"
        class="border p-2 w-[50%] rounded-md"
        v-model="pageBuilderStore.getIsEdittingBlock.width"
      />
    </div>
    <div class="mb-4 flex items-center justify-between">
      <label>Height:</label>
      <input
        type="number"
        min="50"
        class="border p-2 w-[50%] rounded-md"
        v-model="pageBuilderStore.getIsEdittingBlock.height"
      />
    </div>
    <div class="mb-4 flex items-center justify-between">
      <label>Border Radius:</label>
      <input
        type="number"
        min="0"
        class="border p-2 w-[50%] rounded-md"
        v-model="pageBuilderStore.getIsEdittingBlock.borderRadius"
      />
    </div>
    <div class="mb-4 flex items-center justify-between">
      <label>Border:</label>
      <input
        type="number"
        min="0"
        class="border p-2 w-[50%] rounded-md"
        v-model="pageBuilderStore.getIsEdittingBlock.border"
      />
    </div>
   <div class="mb-4 flex items-center justify-between">
      <label>Border Color:</label>
    </div>
    <div class="mb-4 flex items-center justify-between">
      <label>Background Color:</label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePageBuilderStore } from "../../stores/pagebuilderstore";

const pageBuilderStore = usePageBuilderStore();
</script>
