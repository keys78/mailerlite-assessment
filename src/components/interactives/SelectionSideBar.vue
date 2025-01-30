<template>
  <div
    class="border border-[var(--borderOne)] rounded-[5px] bg-[var(--editor)] w-full h-full p-2"
  >
    <p class="text-center py-2 font-bold bg-[var(--borderOne)] text-[var(--accent1B)] rounded-[3px] mb-3">Selections</p>
    <LayoutSettings v-if="pageBuilderStore.selectedBlock === 'layout'" />
    <TextSettings v-if="pageBuilderStore.selectedBlock === 'text'" />
    <ImageSettings v-if="pageBuilderStore.selectedBlock === 'image'" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ImageSettings from "../../components/imageItems/ImageSettings.vue";
import TextSettings from "../../components/textItems/TextSettings.vue";
import LayoutSettings from "../../components/layoutItems/LayoutSettings.vue";
import { usePageBuilderStore } from "../../stores/pagebuilderstore";

const pageBuilderStore = usePageBuilderStore();
</script>
