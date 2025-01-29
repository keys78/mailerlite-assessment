<template>
  <div
    class="border border-gray-200 rounded-[5px] bg-[var(--editor)] w-full h-full p-2"
  >
    <div
      class="droppable-area p-5 h-auto min-h-screen border-dashed border"
      @drop.prevent="handleDrop"
      @dragover.prevent
      @dragenter.prevent
    >
      <p
        v-if="!pageBuilderStore.getAllBuilderBlocks?.length"
        class="text-center"
      >
        Drop Here
      </p>
      <div class="w-full" v-if="pageBuilderStore.getAllBuilderBlocks?.length">
        <draggable
          class="dragArea list-group w-full grid grid-col-1 items-center justify-center"
          :list="pageBuilderStore.getAllBuilderBlocks"
        >
          <div
            v-for="(item, index) in pageBuilderStore.getAllBuilderBlocks"
            :key="item.uuid"
          >
            <div
              class="my-4"
              :class="{
                'border-dashed border-[0.5px] border-amber-950 p-2':
                  item.uuid === pageBuilderStore.getIsEdittingBlock?.uuid,
              }"
            >
              <div
                class="z-10 flex items-center justify-between gap-4"
                v-if="item.uuid === pageBuilderStore.getIsEdittingBlock?.uuid"
              >
                <div class="cursor-move">
                  <p>drag Icon</p>
                </div>
                <div>
                  <p
                    class="bg-white p-2 w-auto cursor-pointer"
                    @click="pageBuilderStore.deleteBlockFromBuilder(index)"
                  >
                    Delete
                  </p>
                  <p
                    class="bg-white p-2 w-auto cursor-pointer"
                    @click="pageBuilderStore.duplicateBlockInBuilder(index)"
                  >
                    Duplicate
                  </p>
                </div>
              </div>
              <ImageBlock
                v-if="item.blockType === 'image'"
                :block="item"
                @click="pageBuilderStore.setIsEdittingBlock(item, index)"
              />
              <TextBlock
                v-if="item.blockType === 'text'"
                :block="item"
                @click="pageBuilderStore.setIsEdittingBlock(item, index)"
              />
              <LayoutBlock
                v-if="item.blockType === 'layout'"
                :block="item"
                @click="pageBuilderStore.setIsEdittingBlock(item, index)"
              />
            </div>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePageBuilderStore } from "../../stores/pagebuilderstore";
import ImageBlock from "../../components/Blocks/ImageBlock.vue";
import LayoutBlock from "../../components/Blocks/LayoutBlock.vue";
import TextBlock from "../Blocks/TextEditorBlock.vue";
import { VueDraggableNext as draggable } from "vue-draggable-next";

const pageBuilderStore = usePageBuilderStore();

const handleDrop = (event: DragEvent) => {
  const droppedItem = event.dataTransfer?.getData("item");
  if (droppedItem) {
    pageBuilderStore.addBlockToBuilder(JSON.parse(droppedItem));
  }
};
</script>

<style scoped>
.droppable-area {
  border-color: #bbb;
  border-radius: 6px;
  /* transition: all 0.3s ease-in-out; */
}

.droppable-area:hover {
  background-color: var(--editorInteract);
}
</style>
