<template>
  <div
    :style="editorStyles"
    @click.stop="pageBuilderStore.setIsEdittingBlock(block, index)"
  >
    <ckeditor
      v-model="data"
      :editor="ClassicEditor"
      :config="config"
      :disabled="!pageBuilderStore.editorMode"
    />
    <div></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Bold,
  Italic,
  Undo,
  Link,
  BlockQuote,
  CodeBlock,
  Alignment,
  TodoList,
  Indent,
  List,
  Heading,
  FontFamily,
  FontColor,
  FontBackgroundColor,
  Strikethrough,
  Subscript,
  Superscript,
  Code,
} from "ckeditor5";
import { Ckeditor } from "@ckeditor/ckeditor5-vue";

import "ckeditor5/ckeditor5.css";
import { usePageBuilderStore } from "../../stores/pagebuilderstore";

const props = defineProps({
  block: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
const pageBuilderStore = usePageBuilderStore();
const data = ref(props.block.content || "<p>Hello World!</p>");

const config = computed(() => {
  return {
    licenseKey: "GPL",
    plugins: [
      Essentials,
      Paragraph,
      Bold,
      Italic,
      Undo,
      Link,
      BlockQuote,
      CodeBlock,
      Alignment,
      TodoList,
      Indent,
      List,
      Heading,
      FontFamily,
      FontColor,
      FontBackgroundColor,
      Strikethrough,
      Subscript,
      Superscript,
      Code,
    ],
    toolbar: {
      items: filteredToolBarItems.value,
    },
  };
});

const toolbarItems: any = ref([
  "undo",
  "redo",
  "|",
  "heading",
  "|",
  "fontfamily",
  "fontsize",
  "fontColor",
  "fontBackgroundColor",
  "|",
  "bold",
  "italic",
  "strikethrough",
  "subscript",
  "superscript",
  "code",
  "|",
  "link",
  "blockQuote",
  "codeBlock",
  "|",
  "alignment",
  "|",
  "bulletedList",
  "numberedList",
  "todoList",
  "outdent",
  "indent",
]);

const filteredToolBarItems = computed(() => {
  // Base filtering for block types like heading, paragraph, etc.
  let toolbar = [...toolbarItems.value];

  // Handle different block types
  switch (props.block.name) {
    case "heading":
      // Keep heading-related items and text formatting
      toolbar = toolbar.filter((item) =>
        [
          "undo",
          "redo",
          "|",
          "heading",
          "fontfamily",
          "fontsize",
          "fontColor",
          "fontBackgroundColor",
          "|",
          "bold",
          "italic",
          "code",
          "alignment",
        ].includes(item)
      );
      break;

    case "paragraph":
      // Paragraph needs standard text formatting tools
      toolbar = toolbar.filter((item) =>
        [
          "undo",
          "redo",
          "|",
          "fontfamily",
          "fontsize",
          "fontColor",
          "fontBackgroundColor",
          "|",
          "bold",
          "italic",
          "strikethrough",
          "subscript",
          "superscript",
          "link",
          "blockQuote",
          "codeBlock",
          "alignment",
        ].includes(item)
      );
      break;

    case "list":
      // For lists, we only need list tools and a few additional options
      toolbar = toolbar.filter((item) =>
        [
          "undo",
          "redo",
          "|",
          "bulletedList",
          "numberedList",
          "todoList",
          "outdent",
          "indent",
          "blockQuote",
        ].includes(item)
      );
      break;

    case "table":
      // For tables, only keep table-related options
      toolbar = toolbar.filter((item) =>
        ["undo", "redo", "|", "blockQuote", "codeBlock"].includes(item)
      );
      break;

    case "code":
      // For code blocks, keep code-related tools
      toolbar = toolbar.filter((item) =>
        ["undo", "redo", "|", "codeBlock", "blockQuote", "alignment"].includes(
          item
        )
      );
      break;

    case "link":
      // For links, keep link-related tools
      toolbar = toolbar.filter((item) =>
        ["undo", "redo", "|", "link", "blockQuote", "alignment"].includes(item)
      );
      break;

    case "blockquote":
      // For blockquotes, keep blockquote-related tools
      toolbar = toolbar.filter((item) =>
        ["undo", "redo", "|", "blockQuote", "alignment"].includes(item)
      );
      break;

    default:
      toolbar = toolbar.filter((item) =>
        [
          "undo",
          "redo",
          "|",
          "fontfamily",
          "fontsize",
          "fontColor",
          "fontBackgroundColor",
          "|",
          "bold",
          "italic",
          "strikethrough",
          "subscript",
          "superscript",
          "link",
          "blockQuote",
          "codeBlock",
          "|",
          "alignment",
        ].includes(item)
      );
      break;
  }

  return pageBuilderStore.editorMode
    ? toolbar
    : [];
});

// const isActiveEl = computed(() => {
//   return props.block.uuid === pageBuilderStore.getIsEdittingBlock.uuid
// })

const editorStyles = computed(() => ({
  backgroundColor: props.block.backgroundColor,
  borderRadius: `${props.block.borderRadius || 1}px`,
  border: `${props.block.border || 1}px solid ${props.block.borderColor}`,
  padding: props.block.paddingY + 'px' + ' ' + props.block.paddingX + 'px',
}));

onMounted(() => {
  console.log("id1", props.block.uuid);
  console.log("id2", pageBuilderStore.isEdittingBlock.uuid);
});
</script>

<style scoped>
</style>
