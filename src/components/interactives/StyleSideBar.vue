<template>
  <div class="border border-[var(--borderOne)] rounded-[5px] bg-[var(--editor)] w-full h-full p-2">
    <p class="text-center py-2 font-bold bg-[var(--borderOne)] text-[var(--accent1B)] rounded-[3px] mb-3"> Styles</p>
    <ImageStyles v-if="pageBuilderStore.getIsEdittingBlock?.blockType === 'image'" />
    <TextStyles  v-if="pageBuilderStore.getIsEdittingBlock?.blockType === 'text'" />
    <LayoutStyles v-if="pageBuilderStore.getIsEdittingBlock?.blockType === 'layout'" />
  </div>
</template>

<script lang="ts" setup>
import ImageStyles from "../../components/imageItems/ImageStyles.vue";
import TextStyles from "../../components/textItems/TextStyles.vue";
import LayoutStyles from "../../components/layoutItems/LayoutStyles.vue";
import { usePageBuilderStore } from "../../stores/pagebuilderstore";

const pageBuilderStore = usePageBuilderStore()
</script>
