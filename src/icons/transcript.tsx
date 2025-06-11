import * as React from "react";
import type { SVGProps } from "react";
const SvgTranscript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...props}
  >
    <path
      d="M5 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M18 11a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM16 16a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1M7 11a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2z"
    />
    <path
      fillRule="evenodd"
      d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTranscript;
