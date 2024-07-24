import {
  BREAKPOINTS,
  BREAKPOINTS_ARRAY,
  mapCssToBreakpoints,
  mapStylesValuesToBreakpoints,
  StylesValue,
} from "../../styles/helpers";

import { GridPosition } from "./CardGrid";

const buildStyles = (
  width: StylesValue,
  height: StylesValue,
  gap: StylesValue,
  numberRows: StylesValue,
  numberCols: StylesValue,
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let styles: any = {};
  styles = mapStylesValuesToBreakpoints({
    width,
    height,
    gap,
  });

  for (const breakpoint of BREAKPOINTS_ARRAY) {
    if (numberRows[breakpoint]) {
      styles[breakpoint]["grid-template-rows"] =
        `repeat(${numberRows[breakpoint]}, 1fr)`;
    }

    if (numberCols[breakpoint]) {
      styles[breakpoint]["grid-template-columns"] =
        `repeat(${numberCols[breakpoint]}, 1fr)`;
    }
  }

  return mapCssToBreakpoints(styles);
};

export const buildGridChildStyles = (
  startCoordinate: GridPosition,
  endCoordinate?: GridPosition,
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const styles: any = {};

  for (const breakpoint of BREAKPOINTS_ARRAY) {
    styles[breakpoint] = {};

    if (startCoordinate[breakpoint]) {
      styles[breakpoint]["grid-column-start"] =
        `${startCoordinate[breakpoint][0]}`;
      styles[breakpoint]["grid-row-start"] =
        `${startCoordinate[breakpoint][1]}`;
    }

    if (endCoordinate?.[breakpoint]) {
      styles[breakpoint]["grid-column-end"] =
        `${endCoordinate[breakpoint][0] + 1}`;
      styles[breakpoint]["grid-row-end"] =
        `${endCoordinate[breakpoint][1] + 1}`;
    }
  }

  styles[BREAKPOINTS.DEFAULT] = {
    ...styles[BREAKPOINTS.DEFAULT],
    display: "flex",
  };

  return mapCssToBreakpoints(styles);
};

export default buildStyles;
