<template>
  <div
    class="767:flex hidden flex-col justify-between items-center rounded-[6px] w-[100px] h-[97vh] bg-[var(--primary)] fixed"
  >
    <div>
      <div
        class="border-b text-white border-b-gray-400 flex items-center justify-center p-5"
      >
        <SvgIcons name="logo" width="24" height="24" />
      </div>
      <div
        class="flex flex-col items-center justify-center space-y-8 mt-5 text-gray-200"
      >
        <button
          @click="selectBlock('text')"
          class="cursor-pointer flex flex-col p-2 items-center jusitfy-center"
          :class="{
            'bg-[var(--secondary)] rounded-[6px] p-2 h-[60px] w-[70px]':
              pageBuilderStore.selectedBlock === 'text',
          }"
        >
          <SvgIcons width="24" height="24" name="text-icon" />
          <p class="text-sm">Text</p>
        </button>
        <button
          @click="selectBlock('image')"
          class="cursor-pointer flex flex-col p-2 items-center jusitfy-center"
          :class="{
            'bg-[var(--secondary)] rounded-[6px] p-2 h-[60px] w-[70px]':
              pageBuilderStore.selectedBlock === 'image',
          }"
        >
          <SvgIcons width="24" height="24" name="image-icon" />
          <p class="text-sm">Image</p>
        </button>
        <button
          @click="selectBlock('layout')"
          class="cursor-pointer flex flex-col p-2 items-center jusitfy-center"
          :class="{
            'bg-[var(--secondary)] rounded-[6px] p-2 h-[60px] w-[70px]':
              pageBuilderStore.selectedBlock === 'layout',
          }"
        >
          <SvgIcons width="24" height="24" name="layout-icon" />
          <p class="text-sm">Layouts</p>
        </button>
      </div>
    </div>
    <ThemeToggle />
  </div>
</template>

<script lang="ts" setup>
import SvgIcons from "../../assets/icons/SvgIcons.vue";
import { usePageBuilderStore } from "../../stores/pagebuilderstore";
import ThemeToggle from "../ThemeToggle.vue";

const pageBuilderStore = usePageBuilderStore();

const selectBlock = (val: string) => {
  pageBuilderStore.selectBlock(val);
};
</script>

<style scoped></style>
