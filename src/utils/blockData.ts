import { nanoid } from "nanoid";
import predefinedImage1 from "../assets/img/pred_one.jpg";
import predefinedImage2 from "../assets/img/pred__two.jpg";
import predefinedImage3 from "../assets/img/pred_three.jpg";

import layoutOne from "../assets/img/layout_one.png";
import layoutTwo from "../assets/img/layout_two.png";
import layoutThree from "../assets/img/layout_three.png";
import layoutFour from "../assets/img/layout_four.png";

export const builderImages: any = [
  {
    uuid: nanoid(),
    blockType: "image",
    src: predefinedImage1,
    alt: "forest",
    width: "",
    height: "",
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    paddingX: "40",
    paddingY: "40",
    alignment: "center",
  },
  {
    uuid: nanoid(),
    blockType: "image",
    src: predefinedImage2,
    alt: "architecture",
    width: "",
    height: "",
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    paddingX: "40",
    paddingY: "40",
    alignment: "center",
  },
  {
    uuid: nanoid(),
    blockType: "image",
    src: predefinedImage3,
    alt: "native-art",
    width: "",
    height: "400",
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    paddingX: "40",
    paddingY: "40",
    alignment: "center",
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
      "<h1 style=\"color:hsl(30, 75%, 60%);font-family:'Trebuchet MS', Helvetica, sans-serif;font-weight:800;font-size:60px;\">This is a heading</h1>",

    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    paddingX: "40",
    paddingY: "40",
    alignment: "center",
  },

  // Paragraph
  {
    uuid: nanoid(),
    blockType: "text",
    name: "paragraph",
    iconName: "paragraph",
    content:
      "<p style=\"font-family:'Georgia', serif;font-size:16px;line-height:1.6;color:#333;\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>",

    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    paddingX: "40",
    paddingY: "40",
    alignment: "center",
  },

  // Link
  {
    uuid: nanoid(),
    blockType: "text",
    name: "link",
    iconName: "link",
    content:
      '<a href="https://www.example.com" style="color:hsl(210, 100%, 40%);text-decoration:none;">Click here to visit Example</a>',

    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    paddingX: "40",
    paddingY: "40",
    alignment: "center",
  },

  // Code Block
  {
    uuid: nanoid(),
    blockType: "text",
    name: "code",
    iconName: "code",
    content:
      "<pre style=\"background-color:#f5f5f5;padding:10px;border-radius:5px;font-family:monospace;color:#333;\"><code>const greeting = 'Hello, world!';\nconsole.log(greeting);</code></pre>",

    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    paddingX: "40",
    paddingY: "40",
    alignment: "center",
  },

  // Table
  {
    uuid: nanoid(),
    blockType: "text",
    name: "table",
    iconName: "table",
    content: `
    <table style="width:100%;border-collapse:collapse;border:1px solid #ddd;">
      <thead>
        <tr>
          <th style="border:1px solid #ddd;padding:8px;background-color:#f2f2f2;text-align:left;">Header 1</th>
          <th style="border:1px solid #ddd;padding:8px;background-color:#f2f2f2;text-align:left;">Header 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border:1px solid #ddd;padding:8px;text-align:left;">Data 1</td>
          <td style="border:1px solid #ddd;padding:8px;text-align:left;">Data 2</td>
        </tr>
        <tr>
          <td style="border:1px solid #ddd;padding:8px;text-align:left;">Data 3</td>
          <td style="border:1px solid #ddd;padding:8px;text-align:left;">Data 4</td>
        </tr>
      </tbody>
    </table>
  `,
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    paddingX: "10",
    paddingY: "40",
  },
  // Ordered List
  {
    uuid: nanoid(),
    blockType: "text",
    name: "OL",
    iconName: "ordered-list",
    content:
      '<ol style="font-family:\'Arial\', sans-serif;font-size:16px;color:#333;"><li style="padding:5px;">First item in the list</li><li style="padding:5px;">Second item in the list</li><li style="padding:5px;">Third item in the list</li></ol>',
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    paddingX: "40",
    paddingY: "40",
    alignment: "center",
  },

  // Unordered List
  {
    uuid: nanoid(),
    blockType: "text",
    name: "UL",
    iconName: "unordered-list",
    content:
      '<ul style="font-family:\'Arial\', sans-serif;font-size:16px;color:#333;"><li style="padding:5px;">List item 1</li><li style="padding:5px;">List item 2</li><li style="padding:5px;">List item 3</li></ul>',
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    paddingX: "40",
    paddingY: "40",
    alignment: "center",
  },

  // Blockquote
  {
    uuid: nanoid(),
    blockType: "text",
    name: "blockquote",
    iconName: "block-quote",
    content:
      "<blockquote style=\"font-family:'Georgia', serif;font-size:18px;line-height:1.6;color:#555;padding:15px;border-left:5px solid #ccc;margin:10px 0;\">This is a blockquote. A long-established fact that a reader will be distracted by the readable content of a page.</blockquote>",
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    paddingX: "40",
    paddingY: "40",
    alignment: "center",
  },

  // Horizontal Rule
  {
    uuid: nanoid(),
    blockType: "text",
    name: "hr",
    iconName: "hr",
    content: '<hr style="border:0;border-top:1px solid #ddd;margin:20px 0;">',
    backgroundColor: "transparent",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    paddingX: "40",
    paddingY: "40",
    alignment: "center",
  },
];
export const builderLayouts: any = [
  {
    uuid: nanoid(),
    blockType: "layout",
    layoutType: "layoutType1",
    iconName: layoutOne,
    backgroundColor: "#ffffff",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    paddingX: "40",
    paddingY: "40",
    alignment: "center",
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
        paddingX: "10",
        paddingY: "10",
        alignment: "center",
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
        backgroundColor: "transparent",
        border: "0",
        borderColor: "transparent",
        borderRadius: "1",
        paddingX: "10",
        paddingY: "10",
        alignment: "center",
      },
    ],
  },
  {
    uuid: nanoid(),
    blockType: "layout",
    layoutType: "layoutType2",
    iconName: layoutTwo,
    backgroundColor: "#ffffff",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    paddingX: "40",
    paddingY: "40",
    alignment: "center",
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
        paddingX: "10",
        paddingY: "10",
        alignment: "center",
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
        backgroundColor: "transparent",
        border: "0",
        borderColor: "transparent",
        borderRadius: "1",
        paddingX: "10",
        paddingY: "10",
        alignment: "center",
      },
    ],
  },
  {
    uuid: nanoid(),
    blockType: "layout",
    layoutType: "layoutType3",
    iconName: layoutThree,
    backgroundColor: "#ffffff",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    paddingX: "40",
    paddingY: "40",
    alignment: "center",
    items: [
      {
        uuid: nanoid(),
        blockType: "image",
        src: predefinedImage1,
        alt: "banner",
        width: "",
        height: "400",
        backgroundColor: "",
        border: "0",
        borderColor: "transparent",
        borderRadius: "1",
        paddingX: "10",
        paddingY: "10",
        alignment: "center",
      },
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
        paddingX: "10",
        paddingY: "10",
        alignment: "center",
      },
    ],
  },
  {
    uuid: nanoid(),
    blockType: "layout",
    layoutType: "layoutType4",
    iconName: layoutFour,
    backgroundColor: "#ffffff",
    border: "0",
    borderColor: "transparent",
    borderRadius: "1",
    paddingX: "40",
    paddingY: "40",
    alignment: "center",
    items: [
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
        backgroundColor: "transparent",
        border: "0",
        borderColor: "transparent",
        borderRadius: "1",
        paddingX: "10",
        paddingY: "10",
        alignment: "center",
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
        backgroundColor: "transparent",
        border: "0",
        borderColor: "transparent",
        borderRadius: "1",
        paddingX: "10",
        paddingY: "10",
        alignment: "center",
      },
    ],
  },
];
