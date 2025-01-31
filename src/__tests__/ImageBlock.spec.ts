import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import ImageBlock from "../components/Blocks/ImageBlock.vue";
import { usePageBuilderStore } from "../stores/pagebuilderstore";

// Mock the store
vi.mock("../stores/pagebuilderstore", () => ({
  usePageBuilderStore: vi.fn().mockReturnValue({
    setIsEdittingBlock: vi.fn(),
  }),
}));

describe("ImageBlock.vue", () => {
    let wrapper

  const mockBlock = {
    blockType: "image",
    src: "https://example.com/image.jpg",
    alt: "Test Image",
    backgroundColor: "rgb(255, 255, 255)",
    border: 1,
    borderColor: "#000",
    paddingX: 10,
    paddingY: 20,
    alignment: "center",
    width: 300,
    height: 200,
    borderRadius: 5,
  };

  const index = 0;
  const layout = {};

  it("renders the image block with correct styles and content", () => {
    wrapper = mount(ImageBlock, {
      props: {
        block: mockBlock,
        index,
        layout,
      },
    });

    // Check if the image is rendered correctly
    const image = wrapper.find(".image-block-img");

    expect(image.exists()).toBe(true);
    expect(image.attributes("src")).toBe(mockBlock.src);
    expect(image.attributes("alt")).toBe(mockBlock.alt);
    expect(image.attributes("style")).toContain(`width: ${mockBlock.width}px`);
    expect(image.attributes("style")).toContain(
      `height: ${mockBlock.height}px`
    );
    expect(image.attributes("style")).toContain(
      `border-radius: ${mockBlock.borderRadius}px`
    );

    // Check if the wrapper div has the correct styles
    const div = wrapper.find(".image-block-wrapper");

    expect(div.exists()).toBe(true);

    expect(div.attributes("style")).toContain(
      `background-color: ${mockBlock.backgroundColor}`
    );
    expect(div.attributes("style")).toContain(
      `border: ${mockBlock.border}px solid ${mockBlock.borderColor}`
    );
    expect(div.attributes("style")).toContain(
      `padding: ${mockBlock.paddingY}px ${mockBlock.paddingX}px`
    );
    expect(div.attributes("style")).toContain(
      `justify-content: ${mockBlock.alignment}`
    );
  });

  it("calls setIsEdittingBlock when clicked", async () => {
    const mockStore = usePageBuilderStore();
    const wrapper = mount(ImageBlock, {
      props: {
        block: mockBlock,
        index,
        layout,
      },
    });

    await wrapper.find(".image-block-wrapper").trigger("click");

    expect(mockStore.setIsEdittingBlock).toHaveBeenCalledWith(
      mockBlock,
      index,
      layout
    );
  });
});
