import { nanoid } from "nanoid";
import predefinedImage1 from "../assets/img/stuthere_banner.png";
import predefinedImage2 from "../assets/img/stuthere_banner.png";

export const builderImages: any = [
  {
    uuid: nanoid(),
    blockType: "image",
    src: predefinedImage1,
    alt: "banner",
    width: "",
    height: "400",
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
  },
  {
    uuid: nanoid(),
    blockType: "image",
    src: predefinedImage2,
    alt: "banner",
    width: "",
    height: "400",
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
  },
];
export const builderTextTypes = [
  // Heading
  {
    uuid: nanoid(),
    blockType: "text",
    name: "heading",
    iconName: "heading",
    content:
      "<h1 style=\"color:hsl(30, 75%, 60%);font-family:'Trebuchet MS', Helvetica, sans-serif;font-weight:800;font-size:40px;\">This is a heading</h1>",
    fontSize: "40",
    fontWeight: "800",
    lineHeight: "2",
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
  },

  // Paragraph
  {
    uuid: nanoid(),
    blockType: "text",
    name: "paragraph",
    iconName: "paragraph",
    content:
      "<p style=\"font-family:'Georgia', serif;font-size:16px;line-height:1.6;color:#333;\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>",
    fontSize: "40",
    fontWeight: "800",
    lineHeight: "2",
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
  },

  // Link
  {
    uuid: nanoid(),
    blockType: "text",
    name: "link",
    iconName: "link",
    content:
      '<a href="https://www.example.com" style="color:hsl(210, 100%, 40%);text-decoration:none;">Click here to visit Example</a>',
    fontSize: "40",
    fontWeight: "800",
    lineHeight: "2",
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
  },

  // Code Block
  {
    uuid: nanoid(),
    blockType: "text",
    name: "code",
    iconName: "code",
    content:
      "<pre style=\"background-color:#f5f5f5;padding:10px;border-radius:5px;font-family:monospace;color:#333;\"><code>const greeting = 'Hello, world!';\nconsole.log(greeting);</code></pre>",
    fontSize: "40",
    fontWeight: "800",
    lineHeight: "2",
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
  },

  // Table
  {
    uuid: nanoid(),
    blockType: "text",
    name: "table",
    iconName: "table",
    content:
      '<table style="width:100%;border-collapse:collapse;border:1px solid #ddd;"><thead><tr><th style="border:1px solid #ddd;padding:8px;background-color:#f2f2f2;">Header 1</th><th style="border:1px solid #ddd;padding:8px;background-color:#f2f2f2;">Header 2</th></tr></thead><tbody><tr><td style="border:1px solid #ddd;padding:8px;">Data 1</td><td style="border:1px solid #ddd;padding:8px;">Data 2</td></tr><tr><td style="border:1px solid #ddd;padding:8px;">Data 3</td><td style="border:1px solid #ddd;padding:8px;">Data 4</td></tr></tbody></table>',
    fontSize: "40",
    fontWeight: "800",
    lineHeight: "2",
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
  },

  // Ordered List
  {
    uuid: nanoid(),
    blockType: "text",
    name: "OL",
    iconName: "ordered-list",
    content:
      '<ol style="font-family:\'Arial\', sans-serif;font-size:16px;color:#333;"><li style="padding:5px;">First item in the list</li><li style="padding:5px;">Second item in the list</li><li style="padding:5px;">Third item in the list</li></ol>',
    fontSize: "40",
    fontWeight: "800",
    lineHeight: "2",
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
  },

  // Unordered List
  {
    uuid: nanoid(),
    blockType: "text",
    name: "UL",
    iconName: "unordered-list",
    content:
      '<ul style="font-family:\'Arial\', sans-serif;font-size:16px;color:#333;"><li style="padding:5px;">List item 1</li><li style="padding:5px;">List item 2</li><li style="padding:5px;">List item 3</li></ul>',
    fontSize: "40",
    fontWeight: "800",
    lineHeight: "2",
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
  },

  // Blockquote
  {
    uuid: nanoid(),
    blockType: "text",
    name: "blockquote",
    iconName: "block-quote",
    content:
      "<blockquote style=\"font-family:'Georgia', serif;font-size:18px;line-height:1.6;color:#555;padding:15px;border-left:5px solid #ccc;margin:10px 0;\">This is a blockquote. A long-established fact that a reader will be distracted by the readable content of a page.</blockquote>",
    fontSize: "40",
    fontWeight: "800",
    lineHeight: "2",
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
  },

  // Horizontal Rule
  {
    uuid: nanoid(),
    blockType: "text",
    name: "hr",
    iconName: "hr",
    content: '<hr style="border:0;border-top:1px solid #ddd;margin:20px 0;">',
    fontSize: "40",
    fontWeight: "800",
    lineHeight: "2",
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
  },
];
export const builderLayouts: any = [
  {
    uuid: nanoid(),
    blockType: "layout",
    layoutType: "layoutType1",
    iconName: "layout-1",
    iconWidth: "100%",
    iconHeight: "120",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    marginX: "10",
    marginY: "10",
    items: [
      {
        uuid: nanoid(),
        blockType: "image",
        src: predefinedImage2,
        alt: "banner",
        width: "",
        height: "400",
        backgroundColor: "",
        border: "0",
        borderColor: "transparent",
        borderRadius: "1",
      },
      {
        uuid: nanoid(),
        blockType: "text",
        name: "heading",
        content: `
          <h1 style="color:hsl(30, 75%, 60%); font-family:'Poppins', sans-serif; font-weight:800; font-size:36px;">
            Creative Design That Converts
          </h1>
          <p style="font-family:'Roboto', sans-serif; font-size:16px; line-height:1.5; color:#333;">
            Great design isn't just about aesthetics — it's about creating user experiences that drive results. Whether it's a website or a landing page, design matters!
          </p><br>
          <h2 style="color:hsl(120, 60%, 50%); font-family:'Quicksand', sans-serif; font-weight:600; font-size:28px;">
            Why Invest in Design?
          </h2>
          <ul style="font-family:'Roboto', sans-serif; font-size:16px; color:#333;">
            <li>Improve user engagement.</li>
            <li>Enhance brand recognition.</li>
            <li>Boost conversions and sales.</li>
          </ul>
        `,
        fontSize: "40",
        fontWeight: "800",
        lineHeight: "2",
        backgroundColor: "transparent",
        border: "0",
        borderColor: "transparent",
        borderRadius: "1",
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
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    marginX: "10",
    marginY: "10",
    items: [
      {
        uuid: nanoid(),
        blockType: "image",
        src: predefinedImage2,
        alt: "banner",
        width: "",
        height: "400",
        backgroundColor: "",
        border: "0",
        borderColor: "transparent",
        borderRadius: "1",
      },
      {
        uuid: nanoid(),
        blockType: "text",
        name: "paragraph",
        content: `
          <h1 style="color:hsl(30, 75%, 60%); font-family:'Poppins', sans-serif; font-weight:800; font-size:36px;">
            Elevate Your Business
          </h1>
          <p style="font-family:'Roboto', sans-serif; font-size:16px; line-height:1.5; color:#333;">
            Digital transformation is more than just a trend. It’s a business imperative. Whether you're building a brand, launching a product, or engaging customers, your digital presence makes the difference.
          </p><br>
          <h2 style="color:hsl(120, 60%, 50%); font-family:'Quicksand', sans-serif; font-weight:600; font-size:28px;">
            The Power of Digital Strategies
          </h2>
          <ul style="font-family:'Roboto', sans-serif; font-size:16px; color:#333;">
            <li>Build a user-friendly website.</li>
            <li>Leverage SEO and digital marketing.</li>
            <li>Use data to optimize growth.</li>
          </ul>
        `,
        fontSize: "40",
        fontWeight: "800",
        lineHeight: "2",
        backgroundColor: "transparent",
        border: "0",
        borderColor: "transparent",
        borderRadius: "1",
      },
    ],
  },
];
