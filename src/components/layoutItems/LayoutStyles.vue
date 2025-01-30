<template>
  <div>
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
      <label>Padding:</label>
      <div class="flex items-center justify-between">
        <input
        type="number"
        min="1"
        class="border p-2 w-[50%] rounded-md"
        v-model="pageBuilderStore.getIsEdittingBlock.paddingY"
      />
      <input
        type="number"
        min="1"
        class="border p-2 w-[50%] rounded-md"
        v-model="pageBuilderStore.getIsEdittingBlock.paddingX"
      />
      </div>
    </div>
   <div class="mb-4 flex items-center justify-between">
        <label>Border Color:</label>
        <color-picker v-model:pureColor="pageBuilderStore.getIsEdittingBlock.borderColor"/>
    </div>
    <div class="mb-4 flex items-center justify-between">
      <label>Background Color:</label>
       <color-picker v-model:pureColor="pageBuilderStore.getIsEdittingBlock.backgroundColor"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { usePageBuilderStore } from "../../stores/pagebuilderstore";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

const pageBuilderStore = usePageBuilderStore();

</script>
