import { css, RuleSet } from "styled-components";
import {
  BREAKPOINTS,
  mapCssToBreakpoints,
  mapStylesValuesToBreakpoints,
  StylesValue,
} from "../../styles/helpers";
import { TypesOptions } from "./Text";
import { FONT_TYPES } from "../../styles/theme";

const fadeIn = css`
  @keyframes fadeInUp {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

const underlineGrow = css`
  @keyframes growUnderline {
    0% {
      background-size: 0% var(--underline-size);
    }
    100% {
      background-size: 100% var(--underline-size);
    }
  }
`;

const buildAnimationString = (underline: boolean, fade: boolean): string => {
  const animations = [];

  if (fade) {
    animations.push(`1.5s 0s fadeInUp`);
  }

  if (underline) {
    animations.push(`0.5s ${fade ? "1.5s" : "0s"} growUnderline`);
  }

  return animations.join(", ");
};

const buildStyles = (
  types: Array<TypesOptions> | undefined,
  underline?: boolean,
  fade?: boolean,
  uppercase?: boolean,
  color?: string,
  margin?: string,
  underlineColor?: string,
  underlineSize?: StylesValue,
  disabled?: boolean,
) => {
  if (!types) return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let styles: any = {};
  const rules: RuleSet<object>[] = [];

  styles = mapStylesValuesToBreakpoints({
    "--underline-size": underlineSize,
  });

  for (const type of types) {
    styles = mapStylesValuesToBreakpoints(FONT_TYPES[type], styles);
  }

  if (underline && underlineColor && underlineSize) {
    styles[BREAKPOINTS.DEFAULT] = {
      ...styles[BREAKPOINTS.DEFAULT],
      "padding-bottom": "var(--underline-size)",
      "background-image": `linear-gradient(${underlineColor})`,
      "background-position": "0% 100%",
      "background-size": "0% var(--underline-size)",
      "background-repeat": "no-repeat",
    };

    rules.push(underlineGrow);
  }

  if (color) {
    styles[BREAKPOINTS.DEFAULT] = {
      ...styles[BREAKPOINTS.DEFAULT],
      color: color,
    };
  }

  if (uppercase) {
    styles[BREAKPOINTS.DEFAULT] = {
      ...styles[BREAKPOINTS.DEFAULT],
      "text-transform": "uppercase",
    };
  }

  if (margin) {
    styles[BREAKPOINTS.DEFAULT] = {
      ...styles[BREAKPOINTS.DEFAULT],
      margin: margin,
    };
  }

  if (fade) {
    rules.push(fadeIn);
  }

  styles[BREAKPOINTS.DEFAULT] = {
    ...styles[BREAKPOINTS.DEFAULT],
    width: "fit-content",
    "text-decoration": "none",
    animation: buildAnimationString(!!underline, !!fade),
    "animation-fill-mode": "forwards",
    transition: "all 0.3s",
    ...(disabled && {'pointer-events': 'none'}),
  };

  rules.push(...mapCssToBreakpoints(styles));

  return rules;
};

export default buildStyles;
