<template>
  <svg
    v-if="name === 'layout-icon'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 12.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V12.9C13.5 14.4 14.14 15 15.73 15H19.77C21.36 15 22 14.4 22 12.9Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="name === 'text-icon'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.98999 5.93007V4.42007C1.98999 3.40007 2.81999 2.57007 3.83999 2.57007H16.76C17.78 2.57007 18.61 3.40007 18.61 4.42007V5.93007"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.3 18.1001V3.32007"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.90002 18.1001H12.48"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.6801 10.3401H20.6901C21.4201 10.3401 22.0101 10.9301 22.0101 11.6601V12.4601"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.08 21.4301V10.8701"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.9399 21.4299H18.2199"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="name === 'image-icon'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="name === 'layout-1'"
    viewBox="0 0 166 69"
    fill="none"
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <rect width="166" height="69" rx="6" fill="#FEFDFD" />
    <rect
      x="12"
      y="12"
      width="61"
      height="45"
      rx="3"
      fill="url(#pattern0_1204_422)"
    />
    <rect x="78" y="27" width="35" height="3" rx="1.5" fill="#A0A0A0" />
    <rect x="78" y="37" width="50" height="3" rx="1.5" fill="#A0A0A0" />
    <rect x="102" y="47" width="51" height="3" rx="1.5" fill="#A0A0A0" />
    <rect x="132" y="37" width="21" height="3" rx="1.5" fill="#A0A0A0" />
    <rect x="78" y="47" width="19" height="3" rx="1.5" fill="#A0A0A0" />
    <rect x="78" y="17" width="15" height="3" rx="1.5" fill="#A0A0A0" />
    <rect x="118" y="27" width="35" height="3" rx="1.5" fill="#A0A0A0" />
    <defs>
      <pattern
        id="pattern0_1204_422"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlink:href="#image0_1204_422"
          transform="matrix(0.00502513 0 0 0.00681184 0 -0.00407594)"
        />
      </pattern>
      <image
        id="image0_1204_422"
        width="199"
        height="148"
        xlink:href="data:image/png;base64,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"
      />
    </defs>
  </svg>
  <svg
    v-else-if="name === 'logo'"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 2C8.16 5.69 15.84 5.69 22 2"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 21.9999C8.16 18.3099 15.84 18.3099 22 21.9999"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.2998 3.58008L5.42981 3.82007C8.16981 9.03007 8.11981 15.25 5.32981 20.41"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.6699 20.41C15.8899 15.25 15.8399 9.03007 18.5699 3.82007L18.6999 3.58008"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="name === 'moon'"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.02997 12.42C2.38997 17.57 6.75997 21.76 11.99 21.99C15.68 22.15 18.98 20.43 20.96 17.72C21.78 16.61 21.34 15.87 19.97 16.12C19.3 16.24 18.61 16.29 17.89 16.26C13 16.06 8.99997 11.97 8.97997 7.13996C8.96997 5.83996 9.23997 4.60996 9.72997 3.48996C10.27 2.24996 9.61997 1.65996 8.36997 2.18996C4.40997 3.85996 1.69997 7.84996 2.02997 12.42Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="name === 'sun'"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="name === 'layout-2'"
    :width="width"
    :height="height"
    viewBox="0 0 129 79"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <rect y="0.511719" width="129" height="78.488" rx="6" fill="#FEFDFD" />
    <rect
      x="8.54883"
      y="6.72852"
      width="112.681"
      height="34.9699"
      rx="3"
      fill="url(#pattern0_1204_444)"
    />
    <rect
      x="9.32617"
      y="54.9102"
      width="32.6386"
      height="2.33133"
      rx="1.16566"
      fill="#A0A0A0"
    />
    <rect
      x="47.4043"
      y="54.9102"
      width="34.9699"
      height="2.33133"
      rx="1.16566"
      fill="#A0A0A0"
    />
    <rect
      x="9.32617"
      y="61.9023"
      width="45.8494"
      height="2.33133"
      rx="1.16566"
      fill="#A0A0A0"
    />
    <rect
      x="32.6387"
      y="69.6738"
      width="41.9639"
      height="2.33133"
      rx="1.16566"
      fill="#A0A0A0"
    />
    <rect
      x="79.2656"
      y="69.6738"
      width="41.9639"
      height="2.33133"
      rx="1.16566"
      fill="#A0A0A0"
    />
    <rect
      x="82.373"
      y="61.9023"
      width="17.0964"
      height="2.33133"
      rx="1.16566"
      fill="#A0A0A0"
    />
    <rect
      x="60.6152"
      y="61.9023"
      width="17.8735"
      height="2.33133"
      rx="1.16566"
      fill="#A0A0A0"
    />
    <rect
      x="104.133"
      y="61.9023"
      width="17.0964"
      height="2.33133"
      rx="1.16566"
      fill="#A0A0A0"
    />
    <rect
      x="9.32617"
      y="69.6738"
      width="15.5422"
      height="2.33133"
      rx="1.16566"
      fill="#A0A0A0"
    />
    <rect
      x="9.32617"
      y="47.1387"
      width="12.4337"
      height="2.33133"
      rx="1.16566"
      fill="#A0A0A0"
    />
    <rect
      x="87.8125"
      y="54.9102"
      width="33.4157"
      height="2.33133"
      rx="1.16566"
      fill="#A0A0A0"
    />
    <defs>
      <pattern
        id="pattern0_1204_444"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlink:href="#image0_1204_444"
          transform="matrix(0.00502513 0 0 0.0161921 0 -0.698213)"
        />
      </pattern>
      <image
        id="image0_1204_444"
        width="199"
        height="148"
        xlink:href="data:image/png;base64,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"
      />
    </defs>
  </svg>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: "5",
  },
  height: {
    type: String,
    default: "5",
  },
});
</script>
