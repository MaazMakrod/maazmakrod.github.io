import {
  BREAKPOINTS,
  mapCssToBreakpoints,
  mapStylesValuesToBreakpoints,
  StylesValue,
} from "../../styles/helpers";

export const buildSlideStyles = (width: StylesValue, height: StylesValue) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let styles: any = {};
  styles = mapStylesValuesToBreakpoints({
    width,
    height,
  });

  styles[BREAKPOINTS.DEFAULT] = {
    ...styles[BREAKPOINTS.DEFAULT],
    "scroll-snap-align": "center",
    "flex-shrink": 0,
  };

  return mapCssToBreakpoints(styles);
};

const buildStyles = (
  width: StylesValue,
  height: StylesValue,
  borderRadius?: StylesValue,
  autoplay?: boolean,
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let styles: any = {};

  styles = mapStylesValuesToBreakpoints({
    width,
    height,
    "border-radius": borderRadius,
  });

  styles[BREAKPOINTS.DEFAULT] = {
    ...styles[BREAKPOINTS.DEFAULT],
    position: "relative",
    overflow: autoplay ? "hidden" : "auto",
    display: "flex",
    flex: "none",
    "flex-flow": "row nowrap",
    "scroll-snap-type": "x mandatory",
    "::webkit-scrollbar": {
      display: "none",
    },
    "scrollbar-width": "none",
  };

  return mapCssToBreakpoints(styles);
};

export default buildStyles;
