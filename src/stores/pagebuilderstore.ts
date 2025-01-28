import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import predefinedImage1 from "../assets/img/stuthere_banner.png";
import predefinedImage2 from "../assets/img/stuthere_banner.png"

export const usePageBuilderStore = defineStore("pagebuilderstore", {
  state: () => ({
    builderblocks: [],
    selectedBlock: "image",
    isEdittingBlock: null as any,
    builderImages: [
      {
        uuid: nanoid(),
        src: predefinedImage1,
        alt: "banner",
        width: "200",
        height: "200",
        backgroundColor: "",
        borderColor: "",
        borderRadius: "",
      },
      {
        uuid: nanoid(),
        src: predefinedImage2,
        alt: "banner",
        width: "200",
        height: "200",
        backgroundColor: "",
        borderColor: "",
        borderRadius: "",
      },
    ],
  }),

  getters: {
    getSelectedBlock: (state) => state.selectedBlock,
    getIsEdittingBlock: (state) => state.isEdittingBlock,
    getBuilderImages: (state) => state.builderImages,
  },

  actions: {
    selectBlock(block: string) {
      this.selectedBlock = block;
    },
    addUploadedImagesToBuilderImages(imageSrc: string) {
      const image = {
        uuid: nanoid(),
        src: imageSrc,
        alt: "",
        width: "200",
        height: "200",
        backgroundColor: "",
        borderColor: "",
        borderRadius: "",
      };
      this.builderImages.push({ ...image });
    },
    removeUploadedImagesFromBuilderImages(index: any) {
      this.builderImages.splice(index, 1);
    },
    setIsEdittingBlock(block: Object) {
      this.isEdittingBlock = block;
    },
  },
});
