<template>
  <div class="border rounded-[5px] bg-white max-w-[300px] w-full h-full p-2">
    Styles
    <ImageStyles v-if="pageBuilderStore.getIsEdittingBlock?.blockType === 'image'" />
    <TextStyles  v-if="pageBuilderStore.getIsEdittingBlock?.blockType === 'text'" />
    <LayoutStyles v-if="pageBuilderStore.getIsEdittingBlock?.blockType === 'layout'" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ImageStyles from "../../components/imageItems/ImageStyles.vue";
import TextStyles from "../../components/textItems/TextStyles.vue";
import LayoutStyles from "../../components/layoutItems/LayoutStyles.vue";
import { usePageBuilderStore } from "../../stores/pagebuilderstore";

const pageBuilderStore = usePageBuilderStore()
</script>
