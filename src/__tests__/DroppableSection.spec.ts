import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { usePageBuilderStore } from "../stores/pagebuilderstore";
import DroppableSection from "../components/interactives/DroppableSection.vue";

// Mock the store itself
vi.mock("../stores/pagebuilderstore", () => ({
  usePageBuilderStore: vi.fn().mockReturnValue({
    getAllBuilderBlocks: [] as any,
    getIsEdittingBlock: null,
    isEdittingBlock: {},
    addBlockToBuilder: vi.fn(),
    deleteBlockFromBuilder: vi.fn(),
    duplicateBlockInBuilder: vi.fn(),
  }),
}));

// Mock the child components
vi.mock("../components/Blocks/ImageBlock.vue", () => ({
  default: {
    name: "ImageBlock",
    template: '<div data-testid="image-block"></div>',
  },
}));

vi.mock("../components/Blocks/LayoutBlock.vue", () => ({
  default: {
    name: "LayoutBlock",
    template: '<div data-testid="layout-block"></div>',
  },
}));

vi.mock("../components/Blocks/TextEditorBlock.vue", () => ({
  default: {
    name: "TextBlock",
    template: '<div data-testid="text-block"></div>',
  },
}));

describe("BlockPreview.vue", () => {
  let wrapper = mount(DroppableSection);
  let mockStore: any;

  beforeEach(() => {
    mockStore = {
      getAllBuilderBlocks: [
        {
          uuid: "1",
          blockType: "image",
        },
        {
          uuid: "2",
          blockType: "text",
        },
        {
          uuid: "3",
          blockType: "layout",
        },
      ] as any,
      isEdittingBlock: {},
      getIsEdittingBlock: null,
      addBlockToBuilder: vi.fn(),
      deleteBlockFromBuilder: vi.fn(),
      duplicateBlockInBuilder: vi.fn(),
    };

    // Mock the store function
    (usePageBuilderStore as any).mockReturnValue(mockStore);

    wrapper = mount(DroppableSection);
  });

  it("Droppable Section COmponent Mounts", async () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders correctly with blocks", () => {
    wrapper = mount(DroppableSection);

    expect(wrapper.find('[data-testid="image-block"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="text-block"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="layout-block"]').exists()).toBe(true);
  });

  it("calls addBlockToBuilder on drop", async () => {
    wrapper = mount(DroppableSection);
    const mockItem = { uuid: "new-block", blockType: "text" };

    const event = {
      dataTransfer: {
        getData: vi.fn().mockReturnValue(JSON.stringify(mockItem)),
      },
    } as unknown as DragEvent;

    await wrapper.find(".droppable-area").trigger("drop", event);

    // Check that addBlockToBuilder was called with the correct item
    expect(mockStore.addBlockToBuilder).toHaveBeenCalledWith(mockItem);
  });

  it("deletes a block when delete is clicked", async () => {
    mockStore.isEdittingBlock = { uuid: "1", blockType: "text" };

    wrapper = mount(DroppableSection);
    const deleteButton = wrapper.find(".delete-button");

    await deleteButton.trigger("click");

    expect(mockStore.deleteBlockFromBuilder).toHaveBeenCalled();
  });

  it("duplicates a block when duplicate is clicked", async () => {
    mockStore.isEdittingBlock = { uuid: "1", blockType: "text" };

    wrapper = mount(DroppableSection);
    const duplicateButton = wrapper.find(".duplicate-button");

    await duplicateButton.trigger("click");

    expect(mockStore.duplicateBlockInBuilder).toHaveBeenCalled();
  });
});
