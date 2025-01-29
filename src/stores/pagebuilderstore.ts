import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import predefinedImage1 from "../assets/img/stuthere_banner.png";
import predefinedImage2 from "../assets/img/stuthere_banner.png"

export const usePageBuilderStore = defineStore("pagebuilderstore", {
  state: () => ({
    builderBlocks: [] as any,
    selectedBlock: "layout",
    isEditting: false,
    isEdittingBlock: {} as any,
    isEdittingBlockIndex: null as any,
    isActiveLayout: {} as any,
    builderImages: [
      {
        uuid: nanoid(),
        blockType: "image",
        src: predefinedImage1,
        alt: "banner",
        width: "",
        height: "400",
        backgroundColor: "",
        border: "1",
        borderColor: "#000000",
        borderRadius: "1",
      },
      {
        uuid: nanoid(),
        blockType: "image",
        src: predefinedImage2,
        alt: "banner",
        width: "",
        height: "400",
        backgroundColor: "",
        border: "1",
        borderColor: "#000000",
        borderRadius: "1",
      },
    ],
    builderLayouts: [
      {
        uuid: nanoid(),
        blockType: "layout",
        layoutType: "layoutType1",
        iconName: "layout-1",
        iconWidth: "100%",
        iconHeight: "120",
        border: "1",
        borderColor: "#000000",
        borderRadius: "1",
        items: [
          {
            uuid: nanoid(),
            blockType: "image",
            src: predefinedImage2,
            alt: "banner",
            width: "",
            height: "400",
            backgroundColor: "",
            border: "1",
            borderColor: "#000000",
            borderRadius: "1",
          },
          {
            uuid: nanoid(),
            blockType: "text",
            content: "Hello World",
          },
        ],
      },
      {
        uuid: nanoid(),
        blockType: "layout",
        layoutType: "layoutType2",
        iconName: "layout-2",
        iconWidth: "auto",
        iconHeight: "120",
        border: "1",
        borderColor: "#000000",
        borderRadius: "1",
        items: [
          {
            uuid: nanoid(),
            blockType: "image",
            src: predefinedImage2,
            alt: "banner",
            width: "",
            height: "400",
            backgroundColor: "",
            border: "1",
            borderColor: "#000000",
            borderRadius: "1",
          },
          {
            uuid: nanoid(),
            blockType: "text",
            content: "Hello World",
          },
        ],
      },
    ],
  }),

  getters: {
    getSelectedBlock: (state) => state.selectedBlock,
    getIsEdittingBlock: (state) => state.isEdittingBlock,
    getAllBuilderBlocks: (state) => state.builderBlocks,
    getBuilderImages: (state) => state.builderImages,
    getBuilderLayouts: (state) => state.builderLayouts,
  },

  actions: {
    selectBlock(block: string) {
      this.isEditting = false;
      this.selectedBlock = block;
    },
    addUploadedImagesToBuilderImages(imageSrc: string) {
      const image = {
        uuid: nanoid(),
        blockType: "image",
        src: imageSrc,
        alt: "",
        width: "",
        height: "400",
        backgroundColor: "",
        border: "1",
        borderColor: "#000000",
        borderRadius: "1",
      };
      this.builderImages.push({ ...image });
    },
    removeUploadedImagesFromBuilderImages(index: any) {
      this.builderImages.splice(index, 1);
    },
    setIsEdittingBlock(block: Object, index: any, layout?: any) {
      this.isEditting = true;
      this.isEdittingBlock = block;
      this.isEdittingBlockIndex = index
      this.isActiveLayout = layout
    },
    addBlockToBuilder(block: any) {
      this.builderBlocks.push({ ...block });
    },
    setIsEditting(bool: boolean) {
      this.isEditting = bool;
    },
    deleteBlockFromBuilder(index: any) {
      this.builderBlocks.splice(index, 1);
      this.isEditting = false;
    },
    duplicateBlockInBuilder(index: any) {
      if (index < 0 || index >= this.builderBlocks.length) {
        throw new Error("Index is out of bounds");
      }

      this.isEditting = false;
      const itemToDuplicate = this.builderBlocks[index];
      const duplicatedItem = { ...itemToDuplicate, uuid: nanoid() };

      // Step 2: Check if the duplicated item has items array
      if (duplicatedItem.items && Array.isArray(duplicatedItem.items)) {
        // Step 3: Iterate through the children and generate new uuids for them
        duplicatedItem.items = duplicatedItem.items.map((item: any) => ({
          ...item,
          uuid: nanoid()
        }));
      }

      this.builderBlocks = [
        ...this.builderBlocks.slice(0, index + 1),
        duplicatedItem,
        ...this.builderBlocks.slice(index + 1),
      ];
    },
    updateBuilderLayout(layoutBlock: any, newItem: Object) {
        layoutBlock.items[this.isEdittingBlockIndex] = { ...newItem };
    },
    updateBlock(blockType: string, newBlock: any) {
      this.isEditting = true
      const isLBuilderBlockItem = this.builderBlocks.find(el => el.uuid === this.isEdittingBlock.uuid)
      if (blockType === 'image') {
       if(isLBuilderBlockItem) {
         this.builderBlocks[this.isEdittingBlockIndex].src = newBlock.src;
       } else {
        this.isActiveLayout.items[this.isEdittingBlockIndex].src = newBlock.src;
       }
      }
    }
  },
});
