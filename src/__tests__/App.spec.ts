import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";
import App from "../App.vue";
import { usePageBuilderStore } from "../stores/pagebuilderstore";

// Mock necessary imports or components

vi.mock("../stores/pagebuilderstore", () => ({
  usePageBuilderStore: vi.fn().mockReturnValue({
    editorMode: true,
    isEditting: true,
  }),
}));

vi.mock("@ckeditor/ckeditor5-build-classic", () => ({
  ClassicEditor: {
    create: vi.fn().mockResolvedValue({
      setData: vi.fn(),
      getData: vi.fn().mockReturnValue("<p>Mocked CKEditor content</p>"),
    }),
  },
}));

vi.mock("../components/interactives/SideBar.vue", () => ({
  default: {
    name: "SideBar",
    template: '<div class="sidebar" data-testid="sidebar"></div>',
  },
}));

vi.mock("../components/interactives/DroppableSection.vue", () => ({
  default: {
    name: "DroppableSection",
    template:
      '<div class="droppable-section" data-testid="droppable-section"></div>',
  },
}));

vi.mock("../pages/BlockPreview.vue", () => ({
  default: {
    name: "BlockPreview",
    template: '<div class="block-preview" data-testid="block-preview"></div>',
  },
}));

vi.mock("../components/interactives/Header.vue", () => ({
  default: {
    name: "Header",
    template: '<div class="header" data-testid="header"></div>',
  },
}));

vi.mock("../components/interactives/SelectionSideBar.vue", () => ({
  default: {
    name: "SelectionSideBar",
    template:
      '<div class="selection-sidebar" data-testid="selection-sidebar"></div>',
  },
}));

vi.mock("../components/interactives/StyleSideBar.vue", () => ({
  default: {
    name: "StyleSideBar",
    template: '<div class="style-sidebar" data-testid="style-sidebar"></div>',
  },
}));

describe("App.vue", () => {
  let wrapper = mount(App);

  let mockStore: any;

  beforeEach(() => {
    // Initialize the mock store object
    mockStore = {
      editorMode: true,
      isEditting: true,
    };
  });

  it("App Mounts", async () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders correctly in editor mode", async () => {
    mockStore.editorMode = true;
    mockStore.isEditting = true;

    wrapper = mount(App);

    expect(wrapper.find('[data-testid="header"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="sidebar"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="droppable-section"]').exists()).toBe(
      true
    );
    expect(wrapper.find('[data-testid="block-preview"]').exists()).toBe(false);
    expect(wrapper.find('[data-testid="style-sidebar"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="selection-sidebar"]').exists()).toBe(
      false
    );
  });

  it("renders correctly in preview mode", async () => {
    const mockStore = usePageBuilderStore();

    mockStore.editorMode = false;
    mockStore.isEditting = false;

    wrapper = mount(App);

    expect(wrapper.find('[data-testid="header"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="sidebar"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="droppable-section"]').exists()).toBe(
      false
    );
    expect(wrapper.find('[data-testid="block-preview"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="style-sidebar"]').exists()).toBe(false);
    expect(wrapper.find('[data-testid="selection-sidebar"]').exists()).toBe(
      false
    );
  });

  it("toggles sidebars when editorMode changes", async () => {
    // Set the store to editor mode
    const mockStore = usePageBuilderStore();

    mockStore.editorMode = true;
    mockStore.isEditting = true;
    let wrapper = mount(App);

    expect(wrapper.find('[data-testid="style-sidebar"]').exists()).toBe(true);

    // Change the store to preview mode
    mockStore.editorMode = false;
    mockStore.isEditting = false;
    wrapper = mount(App);

    expect(wrapper.find('[data-testid="style-sidebar"]').exists()).toBe(false);
    expect(wrapper.find('[data-testid="block-preview"]').exists()).toBe(true);
  });
});
