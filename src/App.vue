<template>
  <div class="flex items-start w-full space-x-3">
    <SideBar />
    <div class="w-full h-auto 767:ml-[113px]">
      <Header />
      <div
        class="flex 767:flex-row flex-col items-start 767:space-x-3 767:mt-3 mt-1 h-full w-full"
      >
        <div class="767:w-[300px] w-full max-h-[80vh] overflow-auto 767:fixed">
          <StyleSideBar v-if="pageBuilderStore.isEditting" />
          <SelectionSideBar v-else />
        </div>
        <div class="767:ml-[310px] w-full">
          <DroppableSection />
        </div>
        <!-- <BlockPreview /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from "./components/interactives/SideBar.vue";
import Header from "./components/interactives/Header.vue";
import SelectionSideBar from "./components/interactives/SelectionSideBar.vue";
import StyleSideBar from "./components/interactives/StyleSideBar.vue";
import DroppableSection from "./components/interactives/DroppableSection.vue";
import BlockPreview from "./pages/BlockPreview.vue";
import { usePageBuilderStore } from "./stores/pagebuilderstore";

const pageBuilderStore = usePageBuilderStore();
</script>
