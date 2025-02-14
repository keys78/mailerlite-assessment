<template>
  <div
    class="border border-[var(--borderOne)] rounded-[5px] bg-[var(--editor)] w-full h-full p-2 767:mt-0 mt-4"
  >
    <div
      class="droppable-area p-5 h-auto min-h-screen border-dashed border !border-[var(--borderOne)]"
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
          class="dragArea list-group w-full grid grid-col-1"
          :list="pageBuilderStore.getAllBuilderBlocks"
        >
          <div
            v-for="(item, index) in pageBuilderStore.getAllBuilderBlocks"
            :key="item.uuid"
          >
            <div
              class=""
              :class="{
                'border-dashed border-[0.5px] border-amber-950 p-2':
                  item.uuid === pageBuilderStore.isEdittingBlock?.uuid,
              }"
            >
              <div
                class="z-10 flex items-center justify-between gap-4 mb-2"
                v-if="item.uuid === pageBuilderStore.isEdittingBlock?.uuid"
              >
                <div class="cursor-move">
                  <p
                    class="border border-[var(--borderOne)] text-[var(--accent1B)] rounded-[6px] p-1 w-auto flex items-center"
                    @click="pageBuilderStore.deleteBlockFromBuilder(index)"
                  >
                    <SvgIcon name="drag-icon" width="18" height="18" />
                    &nbsp;{{ " " }}
                    <span class="text-[14px]">Drag</span>
                  </p>
                </div>
                <div class="flex items-center space-x-3">
                  <p
                    class="duplicate-button border border-[var(--borderOne)] text-[var(--accent1B)] rounded-[6px] p-1 w-auto cursor-pointer flex items-center"
                    @click="pageBuilderStore.duplicateBlockInBuilder(index)"
                  >
                    <SvgIcon name="duplicate" width="18" height="18" /> &nbsp;{{
                      " "
                    }}
                    <span class="text-[14px]">Duplicate</span>
                  </p>
                  <p
                    class="delete-button border border-[var(--borderOne)] text-[var(--accent1B)] rounded-[6px] p-1 w-auto cursor-pointer flex items-center"
                    @click="pageBuilderStore.deleteBlockFromBuilder(index)"
                  >
                    <SvgIcon
                      name="delete"
                      width="18"
                      height="18"
                      class="text-red-500"
                    />
                    &nbsp;{{ " " }}
                    <span class="text-[14px]">Delete</span>
                  </p>
                </div>
              </div>
              <div class="w-full">
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
import SvgIcon from "../../assets/icons/SvgIcons.vue";

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
  transition: all 0.1s ease-in-out;
}

.droppable-area:hover {
  background-color: var(--editorInteract);
}
</style>
