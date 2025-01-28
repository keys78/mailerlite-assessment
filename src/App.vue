<script setup lang="ts">
import SideBar from "./components/interactives/SideBar.vue";
import Header from "./components/interactives/Header.vue";
</script>

<template>
  <div class="flex items-start w-full space-x-5">
    <SideBar />
    <div class="w-full h-[88vh]">
      <Header />
      <div class="flex items-start space-x-3 mt-3 h-full">
        <div
          class="border rounded-[5px] bg-white max-w-[300px] w-full h-full p-2"
        >
          Selections
        </div>
        <div class="border rounded-[5px] bg-white w-full h-full p-2">
          Draggable Space
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
