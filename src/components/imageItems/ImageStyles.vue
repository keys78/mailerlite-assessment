<template>
  <div>
    <div>
      <button
        class="cursor-pointer rounded-[6px] p-3 text-center bg-[var(--secondary)] text-[var(--accent1A)] flex items-center justify-center space-x-3 w-full mb-3"
        @click="showImages = true"
      >
        <SvgIcons name="change-image" width="20" height="20" /> &nbsp;
        {{ " " }} Change Image
      </button>

      <div v-if="showImages" class="grid grid-cols-2 gap-3 mb-3">
        <div
          v-for="(element, index) in pageBuilderStore.builderImages"
          :key="index"
        >
          <img
            :src="element.src"
            alt="uploaded image"
            class="w-full h-[80px] object-cover cursor-pointer"
            @click="pageBuilderStore.updateBlock('image', element)"
          />
        </div>
      </div>
    </div>

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
import SvgIcons from "../../assets/icons/SvgIcons.vue";

const pageBuilderStore = usePageBuilderStore();

const showImages = ref(false);
</script>
