import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";
import TextEditorBlock from "../components/Blocks/TextEditorBlock.vue"; // Adjust path as necessary
import { usePageBuilderStore } from "../stores/pagebuilderstore"; // Adjust path as necessary

// Mock CKEditor
vi.mock("@ckeditor/ckeditor5-vue", () => ({
  Ckeditor: {
    name: "Ckeditor",
    template: "<div></div>",
  },
}));

// Mock the store
vi.mock("../stores/pagebuilderstore", () => ({
  usePageBuilderStore: vi.fn().mockReturnValue({
    editorMode: true,
    setIsEdittingBlock: vi.fn(),
    setTextContent: vi.fn(),
  }),
}));

describe("TextEditorBlock.vue", () => {
  const mockBlock = {
    uuid: "block-1",
    content: "<p>Hello World!</p>",
    backgroundColor: "rgb(255, 255, 255)",
    border: 1,
    borderColor: "#000",
    paddingX: 10,
    paddingY: 20,
    alignment: "center",
    borderRadius: 5,
    name: "paragraph",
    blockType: "text",
  };

  const index = 0;
  const layout = {}; 

  let wrapper : any;

  beforeEach(() => {
    wrapper = mount(TextEditorBlock, {
      props: {
        block: mockBlock,
        index,
        layout,
      },
    });
  });

  it("renders the block with correct styles", () => {
    const div = wrapper.find(".text-block-wraaper");

    expect(div.attributes("style")).toContain(
      `background-color: ${mockBlock.backgroundColor}`
    );
    expect(div.attributes("style")).toContain(
      `border-radius: ${mockBlock.borderRadius}px`
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
    await wrapper.find(".text-block-wraaper").trigger("click");

    expect(mockStore.setIsEdittingBlock).toHaveBeenCalledWith(
      mockBlock,
      index,
      layout
    );
  });

  it("updates content when the editor input changes", async () => {
    const mockStore = usePageBuilderStore();
      wrapper = mount(TextEditorBlock, {
        props: {
          block: mockBlock,
          index,
          layout,
        },
      });
    // Simulate a change in the editor input
    const newContent = "<p>Updated Content</p>";
    const editorInstance = wrapper.findComponent({ name: "Ckeditor" });
    editorInstance.vm.$emit("input", newContent);

    // Check that the store method `setTextContent` was called with the new content
    expect(mockStore.setTextContent).toHaveBeenCalled;
  });

  it("shows and hides the toolbar on editor focus and blur", async () => {
    await wrapper.findComponent({ name: "Ckeditor" }).vm.$emit("ready");

    const toolbar = document.createElement("div");
    toolbar.classList.add("ck-toolbar__items");
    toolbar.style.display = "flex";
    document.body.appendChild(toolbar);

    toolbar.classList.add(`ck-${mockBlock.uuid}`);

    await wrapper.findComponent({ name: "Ckeditor" }).vm.$emit("focus");
    toolbar.style.display = "flex";
    expect(toolbar.style.display).toBe("flex");

    await wrapper.findComponent({ name: "Ckeditor" }).vm.$emit("blur");
    toolbar.style.display = "none";
    expect(toolbar.style.display).toBe("none");

    document.body.removeChild(toolbar);
  });
});
