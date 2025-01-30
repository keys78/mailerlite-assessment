<template>
  <div
    :style="{
      backgroundColor: props.block.backgroundColor,
      borderRadius: `${props.block.borderRadius || 1}px`,
      border: `${props.block.border || 1}px solid ${props.block.borderColor}`,
      padding: props.block.paddingY + 'px' + ' ' + props.block.paddingX + 'px',
      justifyContent: props.block.alignment,
    }"
    :class="`w-[100%] flex items-center`"
    @click.stop="pageBuilderStore.setIsEdittingBlock(block, index, layout)"
  >
    <ckeditor
      v-model="data"
      :editor="ClassicEditor"
      :config="config"
      :disabled="!pageBuilderStore.editorMode"
      @focus="onEditorFocus"
      @blur="onEditorBlur"
      @input="onEditorInput"
      @ready="onEditorReady"
    />
    <div></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
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
  FontSize,
  Table,
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
  layout: {
    type: Object,
    required: false,
  },
});
const pageBuilderStore = usePageBuilderStore();
const data = ref(props.block.content || "<p>Hello World!</p>");
const editorFocused = ref(false);
let editorInstance: any = null; // To store the CKEditor instance

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
      FontSize,
      Table,
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
  "table",
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
          "table",
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
          "table",
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
        [
          "table",
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
          "link",
        ].includes(item)
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
          "table",
          "|",
          "alignment",
        ].includes(item)
      );
      break;
  }

  return pageBuilderStore.editorMode ? toolbar : [];
});

const onEditorReady = (editor: any) => {
  editorInstance = editor;
  // Use CKEditor's API to get the toolbar associated with the editor
  const toolbar : any = editor.ui.view.toolbar.element; 
  if (toolbar) {
    // Add the unique UUID class to the toolbar of the current editor
    toolbar.classList.add(`ck-${props.block.uuid}`);
  }
};

const onEditorFocus = () => {
  editorFocused.value = true;
  const toolbar : any = document.querySelector(`.ck-${props.block.uuid} > .ck-toolbar__items`);
  if (toolbar) {
    toolbar.style.display = "flex";  // Show the toolbar when the editor gains focus
  }
};

const onEditorBlur = () => {
  editorFocused.value = false;
  const toolbar : any = document.querySelector(`.ck-${props.block.uuid} > .ck-toolbar__items`);
  if (toolbar) {
    toolbar.style.display = "none"; // Hide the toolbar when the editor loses focus
  }
};

const onEditorInput = () => {
  editorFocused.value = true;
  if (editorInstance) {
    const editorHtmlContent = editorInstance.getData();
    data.value = editorHtmlContent;
    pageBuilderStore.setTextContent(data.value);
  }
};

</script>

<style scoped></style>
