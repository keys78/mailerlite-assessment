<template>
  <div class="border border-[var(--borderOne)] rounded-[5px] w-full h-full p-2">
    <!-- Droppable Area -->
    <div
      class="h-auto min-h-screen m-auto"
    >
      <div v-if="pageBuilderStore.getAllBuilderBlocks?.length">
        <div
          v-for="(item, index) in pageBuilderStore.getAllBuilderBlocks"
          :key="item.uuid"
        >
          <div
            class=""
          >
            <ImageBlock
              v-if="item.blockType === 'image'"
              :block="item"
              :index="index"
            />
            <TextBlock
                v-if="item.blockType === 'text'"
                :block="item"
              :index="index"
              />
            <LayoutBlock
              v-if="item.blockType === 'layout'"
              :block="item"
              :index="index"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePageBuilderStore } from "../stores/pagebuilderstore";
import ImageBlock from "../components/Blocks/ImageBlock.vue";
import TextBlock from "../components/Blocks/TextEditorBlock.vue"
import LayoutBlock from "../components/Blocks/LayoutBlock.vue";

const pageBuilderStore = usePageBuilderStore();
</script>

<style scoped></style>