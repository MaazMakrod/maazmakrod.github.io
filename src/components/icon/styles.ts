import {
  BREAKPOINTS,
  BREAKPOINTS_ARRAY,
  mapCssToBreakpoints,
  StylesValue,
} from "../../styles/helpers";

export type HoverOptions = {
  filter?: string;
  color: string;
  timing: number;
  easingFunction?: string;
};

export const genHoverStyle = (color: string, filter?: string) => ({
  fill: color,
  ...(filter && {
    filter,
  }),
});

const buildStyles = (
  width: StylesValue,
  height: StylesValue,
  color?: string,
  hoverOptions?: HoverOptions,
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const styles: any = {};

  for (const breakpoint of BREAKPOINTS_ARRAY) {
    styles[breakpoint] = {};

    if (width[breakpoint]) {
      styles[breakpoint]["width"] = width[breakpoint];
    }

    if (height[breakpoint]) {
      styles[breakpoint]["height"] = height[breakpoint];
    }
  }

  if (color) {
    styles[BREAKPOINTS.DEFAULT] = {
      ...styles[BREAKPOINTS.DEFAULT],
      fill: color,
    };
  }

  if (hoverOptions) {
    styles[BREAKPOINTS.DEFAULT] = {
      ...styles[BREAKPOINTS.DEFAULT],
      transition: `all ${hoverOptions.timing}ms ${hoverOptions.easingFunction ? hoverOptions?.easingFunction : "ease"}`,
      "&:hover": genHoverStyle(hoverOptions.color, hoverOptions.filter),
    };
  }

  return mapCssToBreakpoints(styles);
};

export default buildStyles;
