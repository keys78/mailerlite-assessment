<template>
  <div
    @click="toggleTheme"
    class="rounded flex p-4 space-x-2 justify-center items-center cursor-pointer text-[var(--accent1A)]"
  >
    <div v-if="!isDarkMode" class="flex items-center justify-center flex-col">
      <SvgIcons width="24" height="24" class="mb-1" name="moon" />
      <span class="text-sm">Dark</span>
    </div>
    <div v-else class="flex items-center justify-center flex-col">
      <SvgIcons width="24" height="24" class="mb-1" name="sun" />
      <span class="text-sm">Light</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import SvgIcons from "../assets/icons/SvgIcons.vue";

const themeKey = "d2dtheme";
const isDarkMode = ref(false);

const initializeTheme = () => {
  const storedTheme = localStorage.getItem(themeKey);
  if (storedTheme) {
    isDarkMode.value = storedTheme === "dark";
  } else {
    isDarkMode.value = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  }
  updateDocumentTheme();
};

const updateDocumentTheme = () => {
  const theme = isDarkMode.value ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
};

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem(themeKey, isDarkMode.value ? "dark" : "light");
  updateDocumentTheme();
};

const handleSystemThemeChange = (event: MediaQueryListEvent) => {
  isDarkMode.value = event.matches;
  updateDocumentTheme();
};

onMounted(() => {
  initializeTheme();
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  darkModeMediaQuery.addEventListener("change", handleSystemThemeChange);
});
</script>
