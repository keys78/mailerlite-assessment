<template>
  <div class="">
    <button class="rounded-[6px] p-3 text-center w-full">
      <label
        for="imageUpload"
        class="cursor-pointer rounded-[6px] p-3 text-center bg-[var(--secondary)] text-[var(--accent1A)] flex items-center justify-center space-x-3"
        ><SvgIcons name="upload-image" width="20" height="20" /> &nbsp;
        {{ " " }} Upload Image</label
      >
      <input
        id="imageUpload"
        type="file"
        class="hidden"
        accept="image/*"
        @change="handleImageUpload"
      />
    </button>

    <div
      class="dragArea list-group 767:grid grid-cols-2 gap-3 flex items-center overflow-auto max-w-[100%]"
      :list="pageBuilderStore.builderImages"
    >
      <div
        class="cursor-move 767:min-w-auto min-w-[200px] relative"
        v-for="(element, index) in pageBuilderStore.builderImages"
        :key="index"
        @dragstart="handleDragStart($event, element, index)"
        draggable="true"
      >
        <img
          :src="element.src"
          alt="uploaded image"
          class="w-full h-[85px] object-cover"
        />
        <button
          @click="pageBuilderStore.removeUploadedImagesFromBuilderImages(index)"
          class="cursor-pointer absolute top-1 right-1"
        >
          <SvgIcons name="delete" width="24" height="24" class="text-red-500" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePageBuilderStore } from "../../stores/pagebuilderstore";
import SvgIcons from "../../assets/icons/SvgIcons.vue";

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
const handleDragStart = (event: DragEvent, item: any, index: any) => {
  event.dataTransfer?.setData("item", JSON.stringify(item));
  event.dataTransfer?.setData("item-index", JSON.stringify(index));
};
</script>
