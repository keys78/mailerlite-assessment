<template>
  <svg
    v-if="name === 'layout-icon'"
    :width="width"
    :height="height"
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
    :width="width"
    :height="height"
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
    :width="width"
    :height="height"
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
    v-else-if="name === 'heading'"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.67004 7.17003V5.35003C2.67004 4.20003 3.60004 3.28003 4.74004 3.28003H19.26C20.41 3.28003 21.33 4.21003 21.33 5.35003V7.17003"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 20.7201V4.11011"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.06006 20.72H15.9401"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="name === 'link'"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.06 10.9399C15.31 13.1899 15.31 16.8299 13.06 19.0699C10.81 21.3099 7.16997 21.3199 4.92997 19.0699C2.68997 16.8199 2.67997 13.1799 4.92997 10.9399"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.59 13.4099C8.24996 11.0699 8.24996 7.26988 10.59 4.91988C12.93 2.56988 16.73 2.57988 19.08 4.91988C21.43 7.25988 21.42 11.0599 19.08 13.4099"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="name === 'paragraph'"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4.5H21"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 9.5H21"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 14.5H21"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 19.5H21"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="name === 'hr'"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 22H21"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 2H21"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 6V18"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.83 7.71989L12 4.88989L9.17004 7.71989"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.83 15.8899L12 18.7199L9.17004 15.8899"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="name === 'block-quote'"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 12.1599H9.68C10.39 12.1599 10.87 12.6999 10.87 13.3499V14.84C10.87 15.49 10.39 16.03 9.68 16.03H8.19C7.54 16.03 7 15.49 7 14.84V12.1599"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 12.16C7 9.36997 7.52 8.89997 9.09 7.96997"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.14 12.1599H15.82C16.53 12.1599 17.01 12.6999 17.01 13.3499V14.84C17.01 15.49 16.53 16.03 15.82 16.03H14.33C13.68 16.03 13.14 15.49 13.14 14.84V12.1599"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.14 12.16C13.14 9.36997 13.66 8.89997 15.23 7.96997"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="name === 'table'"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.02979 8.5H21.9998"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.02979 15.5H21.9998"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.50977 21.99V2.01001"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.5098 21.99V2.01001"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="name === 'ordered-list'"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 19.5H21"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 12.5H21"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 5.5H21"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 5.5L4 6.5L7 3.5"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 12.5L4 13.5L7 10.5"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 19.5L4 20.5L7 17.5"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="name === 'unordered-list'"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 4.5H21"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 9.5H21"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 14.5H21"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 19.5H21"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="name === 'code'"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.02 4.5H16.5C17.12 4.5 17.67 4.52 18.16 4.59C20.79 4.88 21.5 6.12 21.5 9.5V14.5C21.5 17.88 20.79 19.12 18.16 19.41C17.67 19.48 17.12 19.5 16.5 19.5H15.02"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 2V22"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 8.5V15.5"
      stroke="#111112"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="name === 'upload-image'"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.75 5H21.25"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M18.5 7.75V2.25"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg v-else-if="name === 'duplicate'"
    :width="width"
    :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 12.6899V18.0799C16 20.4199 14.44 21.9699 12.11 21.9699H5.89C3.56 21.9699 2 20.4199 2 18.0799V10.3099C2 7.96992 3.56 6.41992 5.89 6.41992H9.72C10.75 6.41992 11.74 6.82992 12.47 7.55992L14.86 9.93992C15.59 10.6699 16 11.6599 16 12.6899Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 8.24997V13.64C22 15.97 20.44 17.53 18.11 17.53H16V12.69C16 11.66 15.59 10.67 14.86 9.93997L12.47 7.55997C11.74 6.82997 10.75 6.41997 9.72 6.41997H8V5.85997C8 3.52997 9.56 1.96997 11.89 1.96997H15.72C16.75 1.96997 17.74 2.37997 18.47 3.10997L20.86 5.49997C21.59 6.22997 22 7.21997 22 8.24997Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


<svg v-else-if="name === 'delete'"
    :width="width"
    :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.80994 2L5.18994 5.63" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.1899 2L18.8099 5.63" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M9.75977 14V17.55" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14.3599 14V17.55" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>


<svg v-else-if="name === 'drag-icon'"
    :width="width"
    :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00999 20.5L3.98999 15.49" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.01001 3.5V20.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.99 3.5L20.01 8.51" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.99 20.5V3.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg v-else-if="name === 'change-image'"
    :width="width"
    :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.1399 2.59003L15.5099 6.22003C15.3699 6.36003 15.2299 6.63003 15.2099 6.83003L15.0099 8.22003C14.9399 8.72003 15.2899 9.07003 15.7899 9.00003L17.1799 8.80003C17.3699 8.77003 17.6499 8.64003 17.7899 8.50003L21.4199 4.87003C22.0499 4.24003 22.3399 3.52003 21.4199 2.60003C20.4899 1.66003 19.7699 1.96003 19.1399 2.59003Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6201 3.10999C18.9301 4.20999 19.7901 5.06999 20.8901 5.37999" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
