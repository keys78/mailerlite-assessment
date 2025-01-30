# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).



Remaining TODOs:
- Hide toolbar when its not focused
- Run test
- Responsiveness
- Style update
- wrap text-toolbar to stop overflowing
- get inner text of text editor and assign to text content
- add favicon
- 
- 
- 


Here's a simple `README.md` template for your GitHub repository based on the assessment:

---

# Landing Page Builder

A simple drag & drop landing page builder created using **Vue 3** with the Composition API, **Pinia** for state management, **TailwindCSS** for styling, and additional libraries like **CKEditor**, **Vue Draggle Next**, **Vue 3 Colorpicker**, and **Nanoid** to enhance the functionality.

## Features

- **Draggable Blocks:** Two types of draggable blocks:
  - **Text Block:** Editable content.
  - **Image Block:** Select one of 3-4 predefined images.
  
- **Rearrange, Duplicate, and Delete Blocks:** 
  - Users can drag to rearrange blocks, duplicate them, or remove them.

- **Responsive Design:** Fully responsive UI, ensuring the builder works across different screen sizes.

- **Save to JSON:** Clicking the "Save" button exports the page data (text content, image links, block order, etc.) to the console as a JSON object.

- **Styling:** Built using **TailwindCSS** to ensure a clean and responsive UI.

## Libraries & Tools

- **Vue 3** – A progressive JavaScript framework.
- **Pinia** – State management for Vue 3.
- **TailwindCSS** – Utility-first CSS framework for fast UI development.
- **CKEditor** – Rich text editor for editing content inside text blocks.
- **Vue Draggle Next** – Drag and drop functionality for movable blocks.
- **Vue 3 Colorpicker** – Colorpicker for customizing block colors (optional).
- **Nanoid** – Unique ID generator for each block.

## Installation

### Prerequisites

- Node.js (version 16.x or higher)
- npm (Node Package Manager)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/landing-page-builder.git
   cd landing-page-builder
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   The app should now be running at `http://localhost:3000`.

## Usage

- **Add Text Block:** Drag and drop the Text Block into the builder area. You can edit its content directly.
  
- **Add Image Block:** Drag and drop the Image Block into the builder area. Click on the block to select one of the predefined images.

- **Rearrange Blocks:** Click and drag any block to reorder them.

- **Duplicate Block:** Click the duplicate button on any block to create a copy.

- **Delete Block:** Click the delete button on any block to remove it from the builder.

- **Save Landing Page:** Click the "Save" button to export the current state of the landing page in JSON format. The exported JSON will be logged to the console.

## Example Output

Upon saving, the JSON output in the console will look like this:

```json
{
  "blocks": [
    {
      "type": "text",
      "content": "This is a sample text block."
    },
    {
      "type": "image",
      "imageUrl": "https://example.com/image1.jpg"
    },
    {
      "type": "text",
      "content": "Another editable text block."
    }
  ]
}
```

## Screenshots

*Insert a few screenshots of your app here to showcase its look and functionality.*

## Tests (Optional)

Feel free to add unit tests using your preferred testing framework (e.g., Jest, Vue Test Utils).

## Contributing

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgements

- Vue 3 for the framework and Composition API.
- TailwindCSS for easy styling.
- CKEditor for the rich text editor.
- Vue Draggle Next for the drag-and-drop functionality.

---

