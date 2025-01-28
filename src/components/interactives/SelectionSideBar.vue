<template>
  <div class="border rounded-[5px] bg-white max-w-[300px] w-full h-full p-2">
    Selections
    <LayoutSettings v-if="selectedBlock === 'layout'" />
    <TextSettings v-if="selectedBlock === 'text'" />
    <ImageSettings v-if="selectedBlock === 'image'" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ImageSettings from "../../components/imageItems/ImageSettings.vue";
import TextSettings from "../../components/textItems/TextSettings.vue";
import LayoutSettings from "../../components/layoutItems/LayoutSettings.vue";

const selectedBlock = ref("layout");
</script>
