<template>
  <div class="border rounded-[5px] bg-white max-w-[300px] w-full h-full p-2">
    Styles
    <ImageStyles v-if="pageBuilderStore.getIsEdittingBlock?.blockType === 'image'" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ImageStyles from "../../components/imageItems/ImageStyles.vue";
import { usePageBuilderStore } from "../../stores/pagebuilderstore";

const pageBuilderStore = usePageBuilderStore()
</script>
