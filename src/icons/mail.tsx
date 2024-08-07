import * as React from "react";
import type { SVGProps } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 -3.5 32 32"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="m16 14.916-3.316-2.749L1.115 24.01h29.476L19.235 12.147zm4.89-4.026 11.002 11.439a2.5 2.5 0 0 0 .108-.695V1.862zM0 1.816v19.818c0 .243.045.473.108.695l11.039-11.402zM31 0H1l15 12.019z"
    />
  </svg>
);
export default SvgMail;
