<template>
  <div class="bg-white rounded-[6px] w-[100px] h-[97vh]">
    <div class="text-red-600 border-b flex items-center justify-center p-5">
      Logo
    </div>
    <div class="flex flex-col items-center justify-center space-y-8 mt-5">
      <button @click="selectBlock('layout')" class="cursor-pointer flex flex-col items-center jusitfy-center" :class="{'bg-amber-900' : selectedBlock === 'layout'}">
        <SvgIcons name="layout-icon" />
        <p class="text-sm">Layouts</p>
      </button>
      <button @click="selectBlock('text')" class="cursor-pointer flex flex-col items-center jusitfy-center" :class="{'bg-amber-900' : selectedBlock === 'text'}">
        <SvgIcons name="text-icon" />
        <p class="text-sm">Text</p>
      </button>
      <button @click="selectBlock('image')" class="cursor-pointer flex flex-col items-center jusitfy-center" :class="{'bg-amber-900' : selectedBlock === 'image'}">
        <SvgIcons name="image-icon" />
        <p class="text-sm">Image</p>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SvgIcons from "../../assets/icons/SvgIcons.vue";

const selectedBlock = ref('')

const selectBlock = (val: string) => {
  selectedBlock.value = val
}
</script>

<style scoped></style>
