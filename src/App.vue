<template>
  <div class="flex items-start w-full space-x-3">
    <SideBar />
    <div class="w-full h-auto">
      <Header />
      <div class="flex items-start space-x-3 mt-3 h-full">
        <StyleSideBar v-if="pageBuilderStore.isEditting" />
        <SelectionSideBar v-else />
        <DroppableSection />
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
import BlockPreview from "./pages/BlockPreview.vue"
import { usePageBuilderStore } from "./stores/pagebuilderstore";

const pageBuilderStore = usePageBuilderStore()
</script>

