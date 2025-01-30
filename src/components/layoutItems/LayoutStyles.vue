<template>
  <div>
    <div class="mb-4 flex items-center justify-between text-[var(--accent1B)]">
      <label>Border Radius:</label>
      <input
        type="number"
        min="0"
        class="border border-[var(--borderOne)] p-2 w-[50%] rounded-md"
        v-model="pageBuilderStore.getIsEdittingBlock.borderRadius"
      />
    </div>
    <div class="mb-4 flex items-center justify-between text-[var(--accent1B)]">
      <label>Border:</label>
      <input
        type="number"
        min="0"
        class="border border-[var(--borderOne)] p-2 w-[50%] rounded-md"
        v-model="pageBuilderStore.getIsEdittingBlock.border"
      />
    </div>
    <div class="mb-4 flex items-center justify-between text-[var(--accent1B)]">
      <label>Padding:</label>
      <div class="flex items-center justify-between w-[50%]">
        <input
          type="number"
          min="1"
          class="border border-[var(--borderOne)] p-2 w-[50%] rounded-md"
          v-model="pageBuilderStore.getIsEdittingBlock.paddingY"
        /> &nbsp; &nbsp;
        <input
          type="number"
          min="1"
          class="border border-[var(--borderOne)] p-2 w-[50%] rounded-md"
          v-model="pageBuilderStore.getIsEdittingBlock.paddingX"
        />
      </div>
    </div>
     <div class="mb-4 flex items-center justify-between text-[var(--accent1B)]">
      <label>Block Alignment:</label>
      <select name="fontFamily" id="" v-model="pageBuilderStore.getIsEdittingBlock.alignment">
        <option value="center">Center</option>
        <option value="start">Start</option>
        <option value="end">End</option>
      </select>
    </div>
    <div class="mb-4 flex items-center justify-between text-[var(--accent1B)]">
      <label>Border Color:</label>
      <color-picker
        v-model:pureColor="pageBuilderStore.getIsEdittingBlock.borderColor"
      />
    </div>
    <div class="mb-4 flex items-center justify-between text-[var(--accent1B)]">
      <label>Background Color:</label>
      <color-picker
        v-model:pureColor="pageBuilderStore.getIsEdittingBlock.backgroundColor"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePageBuilderStore } from "../../stores/pagebuilderstore";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

const pageBuilderStore = usePageBuilderStore();
</script>
