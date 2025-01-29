<template>
  <div>
    <div class="mb-4 flex items-center justify-between">
      <label>Font Size:</label>
     <input
        type="number"
        min="10"
        max="100"
        class="border p-2 w-[50%] rounded-md"
        v-model="pageBuilderStore.getIsEdittingBlock.fontSize"
      />
    </div>
    <div class="mb-4 flex items-center justify-between">
      <label>Font weight:</label>
       <select name="fontFamily" id="">
        <option value="0">400</option>
        <option value="0">500</option>
        <option value="0">600</option>
        <option value="0">700</option>
        <option value="0">800</option>
      </select>
    </div>
    <div class="mb-4 flex items-center justify-between">
      <label>Line Height:</label>
       <select name="fontFamily" id="">
        <option value="0">Arial</option>
        <option value="0">Times New</option>
        <option value="0">Calibra</option>
        <option value="0">Roboto</option>
      </select>
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
      <color-picker
        v-model:pureColor="pageBuilderStore.getIsEdittingBlock.borderColor"
      />
    </div>
    <div class="mb-4 flex items-center justify-between">
      <label>Background Color:</label>
      <color-picker
        v-model:pureColor="pageBuilderStore.getIsEdittingBlock.backgroundColor"
      />
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
