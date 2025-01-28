<template>
  <div class="mt-10">
    <button class="rounded-[6px] p-3 text-center border w-full mb-4">
      <label for="imageUpload" class="cursor-pointer">Upload Image</label>
      <input
        id="imageUpload"
        type="file"
        class="hidden"
        accept="image/*"
        @change="handleImageUpload"
      />
    </button>

    <draggable
      class="dragArea list-group w-full grid grid-cols-2 gap-3"
      :list="pageBuilderStore.builderImages"
    >
      <div
        class="cursor-move"
        v-for="(element, index) in pageBuilderStore.builderImages"
        :key="index"
        @dragstart="handleDragStart($event, element)"
        draggable="true"
      >
        <img
          :src="element.src"
          alt="uploaded image"
          class="w-full h-[80px] object-cover"
        />
        <button
          @click="pageBuilderStore.removeUploadedImagesFromBuilderImages(index)"
          class="w-full cursor-pointer text-center bg-gray-400 py-1 mt-2 rounded-[4px]"
        >
          Remove
        </button>
      </div>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VueDraggableNext as draggable } from "vue-draggable-next";
import { usePageBuilderStore } from "../../stores/pagebuilderstore";

const uploadedImages = ref<string[]>([]);
const pageBuilderStore = usePageBuilderStore();

const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input?.files?.length) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target?.result) {
        uploadedImages.value.push(e.target.result as string);
        pageBuilderStore.addUploadedImagesToBuilderImages(
          e.target.result as string
        );
      }
    };

    reader.readAsDataURL(file);
  }
};

// Make the items draggable by adding draggable data
const handleDragStart = (event: DragEvent, item: any) => {
  event.dataTransfer?.setData("item", JSON.stringify(item));
};
</script>
