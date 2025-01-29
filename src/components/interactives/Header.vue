<template>
  <div
    class="rounded-[6px] w-full flex items-center justify-between s-767:px-5 px-2 py-3 bg-[var(--primary)] text-[var(--accent1A)]"
  >
    <div>
      <div class="flex items-center space-x-3">
        <div
          class="767:hidden block"
          @click="toggleMobileSidebar"
        >
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
    <div class="flex s-767:space-x-5 space-x-2">
      <button
        class="border border-gray-200 py-2 rounded-[6px] 767:w-[140px] w-[70px] text-accent1 cursor-pointer"
      >
        Preview
      </button>
      <button
        class="py-2 rounded-[6px] bg-[var(--secondary)] 767:w-[140px] w-[70px] text-accent1 cursor-pointer"
      >
        Save
      </button>
    </div>
  </div>

  <!-- mobile nav here -->
  <div
    v-if="showMobileSidebar"
    class="767:hidden flex items-center justify-between px-5 rounded-[6px] mt-2 text-gray-200 bg-[var(--primary)]"
  >
    <button
      @click="selectBlock('layout')"
      class="cursor-pointer flex flex-col p-2 items-center jusitfy-center"
      :class="{
        'bg-[var(--secondary)] rounded-[6px] p-2 h-[60px] w-[70px]':
          pageBuilderStore.selectedBlock === 'layout',
      }"
    >
      <SvgIcons name="layout-icon" />
      <p class="text-sm">Layouts</p>
    </button>
    <button
      @click="selectBlock('text')"
      class="cursor-pointer flex flex-col p-2 items-center jusitfy-center"
      :class="{
        'bg-[var(--secondary)] rounded-[6px] p-2 h-[60px] w-[70px]':
          pageBuilderStore.selectedBlock === 'text',
      }"
    >
      <SvgIcons name="text-icon" />
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
      <SvgIcons name="image-icon" />
      <p class="text-sm">Image</p>
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
  showMobileSidebar.value = !showMobileSidebar.value
}

const selectBlock = (val: string) => {
  pageBuilderStore.selectBlock(val);
};
</script>
