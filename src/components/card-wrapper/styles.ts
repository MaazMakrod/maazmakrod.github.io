import {
  mapCssToBreakpoints,
  BREAKPOINTS,
  StylesValue,
  StylesObject,
  BREAKPOINTS_ARRAY,
  AnimationOptions,
  CustomAnimation,
  Position,
  mapStylesValuesToBreakpoints,
} from "../../styles/helpers";
import { css } from "styled-components";
import { RuleSet, Styles } from "styled-components/dist/types";

type BlobOptionsBase = {
  animateBlobPosition?: boolean;
  growBlob?: boolean;
  pulseBlob?: boolean;
  blobStartPosition: Position;
  color: string;
  border?: string;
  outline?: string;
  width?: StylesValue;
  height?: StylesValue;
  pulseOptions?: {
    color: string;
    spread?: string;
    animationOptions?: AnimationOptions;
  };
  blobMovementOptions?: {
    animationOptions?: AnimationOptions;
    customAnimationName?: string;
    [key: number]: Styles<object>;
  };
  growScale?: number;
  customAnimations?: Array<CustomAnimation>;
};

type CardAnimationOptions = {
  boxShadow: string;
};

export type BlobOptions = BlobOptionsBase & StylesObject;

export type OverlayOptions = {
  slideUpOverlay?: boolean;
};

export type CardWrapperStyles = {
  blob?: boolean;
  animateCardHover?: boolean;
  blobOptions?: BlobOptions;
  overlay?: boolean;
  overlayOptions?: OverlayOptions;
  cardAnimationOptions?: CardAnimationOptions;
};

const blobMovementAnimation = css`
  @keyframes blobMovement {
    20% {
      translate: 40% -25%;
      border-radius: 60% 40% 30% 70% / 100% 85% 92% 74%;
    }
    50% {
      translate: 0% 13%;
      border-radius: 20% 71% 47% 70% / 81% 15% 22% 54%;
      rotate: 41deg;
    }
    100% {
      translate: -45% 39%;
      border-radius: 100% 75% 92% 74% / 60% 80% 30% 70%;
      rotate: -60deg;
    }
  }
`;

const pulseAnimation = (color: string, spread = "2rem") => css`
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 ${color};
    }

    70% {
      box-shadow: 0 0 0 ${spread} rgba(0, 0, 0, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;

const buildAnimationString = (
  pulseBlob: boolean,
  animateBlobPosition: boolean,
  pulseOptions?: AnimationOptions,
  blobOptions?: AnimationOptions,
  customBlobAnimationName?: string,
  customAnimations?: Array<CustomAnimation>,
): string => {
  const animations = [];

  if (pulseBlob) {
    animations.push(
      `pulse ${pulseOptions?.timing ?? "2000"}ms ${pulseOptions?.options}`,
    );
  }

  if (animateBlobPosition) {
    animations.push(
      `${customBlobAnimationName ?? 'blobMovement'}  ${blobOptions?.timing ?? "10000"}ms ${blobOptions?.options}`,
    );
  }

  if (customAnimations) {
    for (const animation of customAnimations) {
      animations.push(
        `${animation.name} ${animation.timing} ${animation.options}`,
      );
    }
  }

  return animations.join(", ");
};

export const generateRandomPosition = (): Position => {
  const randomPosition = Math.floor(Math.random() * 101);
  const fixHorizontal = Math.random() > 0.5;
  const fixVertical = Math.random() > 0.5;

  let top = 0,
    left = 0;

  if (fixHorizontal) {
    top = randomPosition;

    if (fixVertical) {
      return { top, right: 0 };
    } else {
      return { top, left };
    }
  } else {
    left = randomPosition;

    if (fixVertical) {
      return { top, left };
    } else {
      return { bottom: 0, left };
    }
  }
};

const buildCustomAnimation = (
  name: string,
  animationParams: { [key: number]: Styles<object> },
) => {
  let animationString: string = `@keyframes ${name} {`;

  for (const [timing, options] of Object.entries(animationParams)) {
    animationString += `\n ${timing}% {`;

    for (const [key, value] of Object.entries(options)) {
      animationString += `\n ${key}: ${value};`;
    }

    animationString += "\n }";
  }

  animationString += "\n }";
  return css`
    ${animationString}
  `;
};

const styleBlob = (options?: BlobOptions) => {
  if (!options) {
    console.log("Cannot add blob without blobOptions defined");
    return [];
  }

  const rules: RuleSet<object> = [];

  const {
    animateBlobPosition = false,
    pulseBlob = false,
    growBlob = false,
    blobStartPosition,
    width = {},
    height = {},
    color,
    outline = "",
    border = "",
    pulseOptions = undefined,
    blobMovementOptions = undefined,
    growScale = 1.2,
    customAnimations = [],
    ...customStyles
  } = options;

  if (animateBlobPosition) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { animationOptions, customAnimationName, ...customMovement } = blobMovementOptions ?? {};

    if (Object.keys(customMovement).length > 0 && customAnimationName) {
      rules.push(buildCustomAnimation(customAnimationName, customMovement));
    } else {
      rules.push(blobMovementAnimation);
    }
  }

  for (const animation of customAnimations) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { name, timing, options, ...customAnimationParams } = animation;
    rules.push(buildCustomAnimation(name, customAnimationParams));
  }

  if (pulseBlob && pulseOptions?.color) {
    rules.push(pulseAnimation(pulseOptions?.color, pulseOptions?.spread));
  }

  const { top, bottom, left, right } = blobStartPosition;

  // Add in initial base styling
  rules.push(
    ...mapCssToBreakpoints({
      [BREAKPOINTS.DEFAULT]: {
        "&::before": {
          position: "absolute",
          top: `${top}%`,
          bottom: `${bottom}%`,
          left: `${left}%`,
          right: `${right}%`,
          content: "''",
          "z-index": "-1",
          background: color,
          border,
          outline,
        },
      },
    }),
  );

  // Add in custom styling
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const remappedCustomStyles: any = {};

  if (width?.[BREAKPOINTS.DEFAULT] === undefined) {
    width[BREAKPOINTS.DEFAULT] = "0px";
  }

  if (height?.[BREAKPOINTS.DEFAULT] === undefined) {
    height[BREAKPOINTS.DEFAULT] = "0px";
  }

  for (const breakpoint of BREAKPOINTS_ARRAY) {
    if (
      remappedCustomStyles[breakpoint] ||
      width?.[breakpoint] ||
      height?.[breakpoint]
    ) {
      remappedCustomStyles[breakpoint] = {
        "&::before": {
          ...customStyles?.[breakpoint],
          ...(width?.[breakpoint] && { width: width[breakpoint] }),
          ...(height?.[breakpoint] && { height: height[breakpoint] }),
        },
      };
    }
  }

  rules.push(...mapCssToBreakpoints(remappedCustomStyles));

  // Add in animation styling
  rules.push(css`
    &::before {
      transition: transform 1s;
      animation: ${buildAnimationString(
        pulseBlob,
        animateBlobPosition,
        pulseOptions?.animationOptions,
        blobMovementOptions?.animationOptions,
        blobMovementOptions?.customAnimationName,
        customAnimations,
      )};
      animation-play-state: paused;
    }
  `);

  rules.push(`${
    animateBlobPosition || pulseBlob || growBlob
      ? `
        &:hover::before {
          animation-play-state: running;
          ${growBlob ? `transform: scale(${growScale});` : ""}
        }
      `
      : ""
  }
    `);

  return rules;
};

const buildStyles = (
  options: CardWrapperStyles,
  width?: StylesValue,
  height?: StylesValue,
  borderRadius?: StylesValue,
) => {
  const {
    blob = false,
    animateCardHover = false,
    overlay = false,
    cardAnimationOptions = undefined,
  } = options;
  const rules: RuleSet<object> = [];

  if (blob) {
    rules.push(...styleBlob(options?.blobOptions));
  }

  if (animateCardHover && cardAnimationOptions) {
    const { boxShadow } = cardAnimationOptions;
    rules.push(css`
      transition: box-shadow ease-in-out 1s;
      &:hover {
        box-shadow: ${boxShadow};
      }
    `);
  }

  if (overlay) {
    const { slideUpOverlay = false } = options?.overlayOptions ?? {};

    rules.push(css`
      &:hover > .content {
        transform: translateY(-100%);
      }

      ${slideUpOverlay
        ? `&:hover > .overlay {
            transform: translateY(-100%);
          }`
        : ""}
    `);
  }

  rules.push(
    ...mapCssToBreakpoints(
      mapStylesValuesToBreakpoints({
        width,
        height,
        "border-radius": borderRadius,
      }),
    ),
  );

  return rules;
};

export default buildStyles;
