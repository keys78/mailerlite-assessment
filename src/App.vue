<template>
  <div class="flex items-start w-full space-x-3">
    <SideBar />
    <div class="w-full h-[88vh]">
      <Header />
      <div class="flex items-start space-x-3 mt-3 h-full">
        <SelectionSideBar />
        <DroppableSection />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from "./components/interactives/SideBar.vue";
import Header from "./components/interactives/Header.vue";
import SelectionSideBar from "./components/interactives/SelectionSideBar.vue";
import DroppableSection from "./components/interactives/DroppableSection.vue";

</script>

