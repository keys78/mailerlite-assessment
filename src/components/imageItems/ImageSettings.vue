<template>
    <div class="mt-10">
            <button class="rounded-[6px] p-3 text-center border w-full mb-4">
              <label for="imageUpload" class="cursor-pointer"
                >Upload Image</label
              >
              <input
                id="imageUpload"
                type="file"
                class="hidden"
                accept="image/*"
                @change="handleImageUpload"
              />
            </button>
            <div class="grid grid-cols-2 gap-2">
              <img src="../../assets/img/stuthere_banner.png" alt="banner" />
              <img src="../../assets/img/stuthere_banner.png" alt="banner" />
              <img
                v-for="(image, index) in uploadedImages"
                :key="index"
                :src="image"
                alt="uploaded image"
                class="w-full h-[80px] object-cover"
              />
            </div>
          </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const uploadedImages = ref<string[]>([]);

const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input?.files?.length) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target?.result) {
        uploadedImages.value.push(e.target.result as string);
      }
    };

    reader.readAsDataURL(file);
  }
};
</script>