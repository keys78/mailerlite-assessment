<template>
  <div class="border rounded-[5px] bg-white max-w-[300px] w-full h-full p-2">
    Selections
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
import { usePageBuilderStore } from "../../stores/pagebuilderstore"

const pageBuilderStore = usePageBuilderStore()
</script>
