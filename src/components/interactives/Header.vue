<template>
  <div
    class="rounded-[6px] w-full flex items-center justify-between 767:px-5 px-2 py-3 bg-[var(--primary)] text-[var(--accent1A)] sticky top-0 z-50"
  >
    <div>
      <div class="flex items-center space-x-3">
        <div class="767:hidden block" @click="toggleMobileSidebar">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7H21"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 12H21"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 17H21"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <h2 class="text-accent1">Design Board</h2>
      </div>
    </div>
    <div class="flex 767:space-x-5 space-x-2">
      <button @click="pageBuilderStore.editorMode ? pageBuilderStore.toggleEditorMode(false) : pageBuilderStore.toggleEditorMode(true)"
        class="border border-gray-200 767:py-2 py-1 rounded-[6px] 767:w-[120px] w-[80px] text-accent1 cursor-pointer"
      >
        {{ pageBuilderStore.editorMode ? 'Preview' : 'Edit' }}
      </button>
      <button
        @click="getAllData"
        class="767:py-2 py-1 rounded-[6px] bg-[var(--secondary)] 767:w-[120px] w-[80px] text-accent1 cursor-pointer"
      >
        Save
      </button>
    </div>
  </div>

  <!-- mobile nav here -->
  <div
    v-if="showMobileSidebar"
    class="767:hidden flex items-center justify-between px-3 rounded-[6px] mt-1 text-gray-200 bg-[var(--primary)] h-[60px]"
  >
    <button
      @click="selectBlock('text')"
      class="cursor-pointer flex flex-col p-1 items-center jusitfy-center w-[60px]"
      :class="{
        'bg-[var(--secondary)] rounded-[6px] p-1 w-[60px]':
          pageBuilderStore.selectedBlock === 'text',
      }"
    >
      <SvgIcons width="20px" height="20px" name="text-icon" />
      <p class="text-[12px]">Text</p>
    </button>
    <button
      @click="selectBlock('image')"
      class="cursor-pointer flex flex-col p-1 items-center jusitfy-center w-[60px]"
      :class="{
        'bg-[var(--secondary)] rounded-[6px] p-1 w-[60px]':
          pageBuilderStore.selectedBlock === 'image',
      }"
    >
      <SvgIcons width="20px" height="20px" name="image-icon" />
      <p class="text-[12px]">Image</p>
    </button>
    <button
      @click="selectBlock('layout')"
      class="cursor-pointer flex flex-col p-1 items-center jusitfy-center w-[60px]"
      :class="{
        'bg-[var(--secondary)] rounded-[6px] p-1 w-[60px]':
          pageBuilderStore.selectedBlock === 'layout',
      }"
    >
      <SvgIcons width="20px" height="20px" name="layout-icon" />
      <p class="text-[12px]">Layouts</p>
    </button>
    <ThemeToggle />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SvgIcons from "../../assets/icons/SvgIcons.vue";
import { usePageBuilderStore } from "../../stores/pagebuilderstore";
import ThemeToggle from "../../components/ThemeToggle.vue";

const pageBuilderStore = usePageBuilderStore();

const showMobileSidebar = ref(true);

const toggleMobileSidebar = () => {
  showMobileSidebar.value = !showMobileSidebar.value;
};

const selectBlock = (val: string) => {
  pageBuilderStore.selectBlock(val);
};

const getAllData = () => {
  const data = pageBuilderStore.getAllBuilderBlocks;

  console.log("builderData", JSON.stringify(data));
  alert(JSON.stringify(data));
};
</script>
