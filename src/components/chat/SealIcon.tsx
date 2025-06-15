
import React from 'react';

const SealIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g stroke="currentColor" strokeLinejoin="round" strokeWidth="4">
      <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
      <path strokeLinecap="round" d="M24 21v-4m-7 14s1 2 7 2s7-2 7-2m-3-7a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z" />
    </g>
  </svg>
);

export default SealIcon;
