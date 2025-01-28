<template>
  <svg
    v-if="name === 'layout-icon'"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <path
      d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z"
    ></path>
  </svg>
  <svg
    v-else-if="name === 'text-icon'"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <path
      d="M208,56V88a8,8,0,0,1-16,0V64H136V192h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V64H64V88a8,8,0,0,1-16,0V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z"
    ></path>
  </svg>
  <svg
    v-else-if="name === 'image-icon'"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <path
      d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"
    ></path>
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
