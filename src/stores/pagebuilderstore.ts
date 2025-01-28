import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import predefinedImage1 from "../assets/img/stuthere_banner.png";
import predefinedImage2 from "../assets/img/stuthere_banner.png"

export const usePageBuilderStore = defineStore("pagebuilderstore", {
  state: () => ({
    builderBlocks: [] as any,
    selectedBlock: "image",
    isEditting: false,
    isEdittingBlock: {} as any,
    builderImages: [
      {
        uuid: nanoid(),
        blockType: "image",
        src: predefinedImage1,
        alt: "banner",
        width: "200",
        height: "200",
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
        width: "200",
        height: "200",
        backgroundColor: "",
        border: "1",
        borderColor: "#000000",
        borderRadius: "1",
      },
    ],
  }),

  getters: {
    getSelectedBlock: (state) => state.selectedBlock,
    getIsEdittingBlock: (state) => state.isEdittingBlock,
    getBuilderImages: (state) => state.builderImages,
    getAllBuilderBlocks: (state) => state.builderBlocks,
  },

  actions: {
    selectBlock(block: string) {
      this.selectedBlock = block;
    },
    addUploadedImagesToBuilderImages(imageSrc: string) {
      const image = {
        uuid: nanoid(),
        blockType: "image",
        src: imageSrc,
        alt: "",
        width: "200",
        height: "200",
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
    setIsEdittingBlock(block: Object) {
      this.isEditting = true;
      this.isEdittingBlock = block;
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

      this.builderBlocks = [
        ...this.builderBlocks.slice(0, index + 1),
        itemToDuplicate,
        ...this.builderBlocks.slice(index + 1), 
      ];
    },
  },
});
