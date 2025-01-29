<template>
  <div
    class="border border-gray-200 rounded-[5px] bg-[var(--editor)] max-w-[300px] w-full h-full p-2"
  >
    <p class="text-center py-2">Selections</p>
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
