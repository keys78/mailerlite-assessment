<template>
  <div class="flex items-start w-full space-x-3">
    <SideBar />
    <div class="w-full h-[88vh]">
      <Header />
      <div class="flex items-start space-x-3 mt-3 h-full">
        <SelectionSideBar />
        <div class="border rounded-[5px] bg-white w-full h-full p-2">
          Draggable Space
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from "./components/interactives/SideBar.vue";
import Header from "./components/interactives/Header.vue";
import SelectionSideBar from "./components/interactives/SelectionSideBar.vue";

</script>
