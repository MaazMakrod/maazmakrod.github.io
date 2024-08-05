import { css } from "styled-components";
import { RuleSet, Styles } from "styled-components/dist/types";

export enum BREAKPOINTS {
  DEFAULT = "default",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export const BREAKPOINTS_ARRAY = [
  BREAKPOINTS.DEFAULT,
  BREAKPOINTS.SMALL,
  BREAKPOINTS.MEDIUM,
  BREAKPOINTS.LARGE,
];

export type StylesObject = {
  [key in BREAKPOINTS]?: Styles<object>;
};

export type StylesValue = {
  [key in BREAKPOINTS]?: string;
};

export type Position = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type AnimationOptions = {
  timing: number;
  options?: string;
};

export type CustomAnimation = AnimationOptions & {
  name: string;
  [key: number]: Styles<object>;
};

const breakpoints = {
  [BREAKPOINTS.SMALL]: "476px",
  [BREAKPOINTS.MEDIUM]: "768px",
  [BREAKPOINTS.LARGE]: "1200px",
};

const mapCssToBreakpoint = (breakpoint: BREAKPOINTS, style: Styles<object>) =>
  breakpoint === BREAKPOINTS.DEFAULT
    ? css(style)
    : css`
        @media (min-width: ${breakpoints[breakpoint] ?? "0px"}) {
          ${css(style)}
        }
      `;

export const mapCssToBreakpoints = (styles: StylesObject) => {
  const rules: RuleSet<object>[] = [];
  for (const [breakpoint, style] of Object.entries(styles)) {
    rules.push(mapCssToBreakpoint(breakpoint as BREAKPOINTS, style));
  }

  return rules;
};

export const mapStylesValuesToBreakpoints = (
  values: {
    [key: string]: StylesValue | undefined;
  },
  cachedStyles?: StylesObject,
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const styles: any = cachedStyles ?? {};

  for (const breakpoint of BREAKPOINTS_ARRAY) {
    styles[breakpoint] = styles?.[breakpoint] ?? {};

    for (const key of Object.keys(values)) {
      if (values?.[key]?.[breakpoint]) {
        styles[breakpoint] = {
          ...styles[breakpoint],
          [key]: values[key][breakpoint],
        };
      }
    }
  }

  return styles;
};

export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
