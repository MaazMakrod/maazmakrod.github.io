import * as React from "react";
import type { SVGProps } from "react";
const SvgFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={480}
    height={480}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      strokeMiterlimit={10}
      d="m24.707 8.793-6.5-6.5A1 1 0 0 0 17.5 2H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.5a1 1 0 0 0-.293-.707M18 10a1 1 0 0 1-1-1V3.904L23.096 10z"
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
      transform="scale(8.53333)"
    />
  </svg>
);
export default SvgFile;
