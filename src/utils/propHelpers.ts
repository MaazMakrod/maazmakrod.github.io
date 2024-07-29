import { BlobMovementOptions, generateRandomPosition, PulseOptions } from "../components/card-wrapper/styles";
import { BREAKPOINTS, Position } from "../styles/helpers";
import { COLORS } from "../styles/theme";

const BORDER_RADIUS = "20px";

const CARD_BASE_PROPS = (padding: string) => ({
    width: { [BREAKPOINTS.DEFAULT]: "100%" },
    height: { [BREAKPOINTS.DEFAULT]: "100%" },
    borderRadius: { [BREAKPOINTS.DEFAULT]: BORDER_RADIUS },
    padding: { [BREAKPOINTS.DEFAULT]: padding },
});

const CARD_THEMES = {
    'primary': {
        backgroundColor: COLORS.primary,
    },
    'secondary': {
        backgroundColor: COLORS.quinary,
    }
};

const BLOB_THEMES = {
    'primary': {
        color: `${COLORS.secondary}24`,
        border: `${COLORS.tertiary} 10px solid`,
        outline: `${COLORS.accent} 10px solid`,
    },
    'secondary': {
        color: `${COLORS.primary}45`,
        border: `${COLORS.quaternary} 10px solid`,
        outline: `${COLORS.accent} 10px solid`,
    } 
};

const DEFAULT_BLOB_ANIMATION_OPTIONS = {  
    timing: 10000,
    options:
        "cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate forwards",
};

const BLOB_CUSTOM_MOVEMENT_ANIMATIONS = [
    {
        animationOptions: DEFAULT_BLOB_ANIMATION_OPTIONS,
        20: {
            translate: "20% -35%",
            "border-radius": "75% 25% 73% 27% / 28% 70% 30% 72%",
          },
        50: {
            translate: "13% 0%",
            "border-radius": "24% 76% 33% 67% / 28% 70% 30% 72%",
            rotate: "-41deg",
          },
        100: {
            translate: "-10% 30%",
            "border-radius": "42% 58% 57% 43% / 53% 28% 72% 47%",
            rotate: "60deg",
        },
        customAnimationName: 'secondary-blob-movement',
    },
    {
        animationOptions: DEFAULT_BLOB_ANIMATION_OPTIONS,
        20: {
            translate: "-50% -55%",
            "border-radius": "75% 25% 30% 70% / 50% 33% 67% 50%",
        },
        40: {
            translate: "10% 50%",
            "border-radius": "39% 61% 57% 43% / 28% 33% 67% 72%",
            rotate: "-41deg",
        },
        70: {
            translate: "-30% 30%",
            "border-radius": "39% 61% 80% 20% / 60% 62% 38% 40% ",
            rotate: "60deg",
        },
        100: {
            translate: "30% 55%",
            "border-radius": "42% 58% 57% 43% / 53% 28% 72% 47%",
            rotate: "60deg",
        },
        customAnimationName: 'tertiary-blob-movement',
    }
];

const BLOB_SIZES = {
    'small': {
        width: {
            [BREAKPOINTS.DEFAULT]: "50px",
            [BREAKPOINTS.SMALL]: "70px",
            [BREAKPOINTS.MEDIUM]: "90px",
            [BREAKPOINTS.LARGE]: "100px",
        },
        height: {
            [BREAKPOINTS.DEFAULT]: "50px",
            [BREAKPOINTS.SMALL]: "70px",
            [BREAKPOINTS.MEDIUM]: "90px",
            [BREAKPOINTS.LARGE]: "100px",
        },
    },
    'medium': {
        width: {
            [BREAKPOINTS.DEFAULT]: "100px",
            [BREAKPOINTS.SMALL]: "150px",
            [BREAKPOINTS.MEDIUM]: "175px",
            [BREAKPOINTS.LARGE]: "225px",
        },
        height: {
            [BREAKPOINTS.DEFAULT]: "100px",
            [BREAKPOINTS.SMALL]: "150px",
            [BREAKPOINTS.MEDIUM]: "175px",
            [BREAKPOINTS.LARGE]: "225px",
        },
    },
    'large': {
        width: {
            [BREAKPOINTS.DEFAULT]: "150px",
            [BREAKPOINTS.SMALL]: "200px",
            [BREAKPOINTS.MEDIUM]: "250px",
            [BREAKPOINTS.LARGE]: "350px",
        },
        height: {
            [BREAKPOINTS.DEFAULT]: "150px",
            [BREAKPOINTS.SMALL]: "200px",
            [BREAKPOINTS.MEDIUM]: "250px",
            [BREAKPOINTS.LARGE]: "350px",
        },
    },
};

const STARTING_BLOB_SHAPE = [
    "60% 40% 30% 70% / 100% 85% 92% 74%",
    "75% 25% 73% 27% / 28% 70% 30% 72%",
    "21% 79% 66% 34% / 58% 48% 52% 42%",
    "50% 40% 30% 50% / 40% 85% 22% 14%",
];

const DEFAULT_PULSE_OPTIONS = {
    color: `${COLORS.accent}ff`,
    spread: "5rem",
    animationOptions: { timing: 2000, options: "infinite" },
};

type BlobAnimations = {
    animateBlobPosition?: boolean;
    pulseBlob?: boolean;
    growBlob?: boolean;
};

type BlobWrapperOptions = {
    blob?: boolean,
    blobAnimations?: BlobAnimations,
    blobSize?: keyof typeof BLOB_SIZES,
    blobPosition?: Position,
    blobPulseOptions?: PulseOptions,
    blobMovementOptions?: number | BlobMovementOptions,
    startingBlobShape?: number,
};

type OverlayOptions = {
    overlay?: boolean;
    slideUpOverlay?: boolean;
};

export const generateCardWrapperProps = (
    cardTheme: keyof typeof CARD_THEMES,
    cardPadding: string,
    blobWrapperOptions: BlobWrapperOptions,
    animateCardHover?: boolean,
    overlayOptions?: OverlayOptions,
) => {
    const {
        blob,
        blobAnimations,
        blobSize,
        blobPosition,
        blobPulseOptions,
        blobMovementOptions,
        startingBlobShape,
    } = blobWrapperOptions;

    const blobStartPosition = blobPosition ?? generateRandomPosition();
    const pulseOptions = blobPulseOptions ?? DEFAULT_PULSE_OPTIONS;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let blobMovement: any = undefined;

    if (blobMovementOptions !== undefined) {
        if (typeof blobMovementOptions === "number") {
            blobMovement = BLOB_CUSTOM_MOVEMENT_ANIMATIONS[blobMovementOptions];
        } else {
            blobMovement = blobMovementOptions;
        }
    } else {
        blobMovement = {
            animationOptions: DEFAULT_BLOB_ANIMATION_OPTIONS,
        };
    }

    const blobStyles = blob ? {
        animateBlobPosition: blobAnimations?.animateBlobPosition,
        pulseBlob: blobAnimations?.pulseBlob,
        growBlob: blobAnimations?.growBlob,
        ...BLOB_THEMES[cardTheme],
        ...(blobSize && BLOB_SIZES[blobSize]),
        blobStartPosition: blobStartPosition,
        pulseOptions: pulseOptions,
        blobMovementOptions: blobMovement,
        [BREAKPOINTS.DEFAULT]: {
            "border-radius": startingBlobShape ? STARTING_BLOB_SHAPE[startingBlobShape] : STARTING_BLOB_SHAPE[0],
            "filter": `drop-shadow(2px 5px 10px ${COLORS.accent})`,
        },
    } : {};

    const cardHoverAnimation = animateCardHover ? {
        boxShadow: `0 10px 20px ${COLORS.accent}, 0 0 5px rgba(0, 0, 0, 0.1)`,
    } : {};

    return {
        ...CARD_BASE_PROPS(cardPadding),
        ...CARD_THEMES[cardTheme],
        cardWrapperStyles: {
            blob: blob,
            blobOptions: blobStyles,
            animateCardHover: animateCardHover,
            cardAnimationOptions: cardHoverAnimation,
            overlay: overlayOptions?.overlay,
            overlayOptions: {
                slideUpOverlay: overlayOptions?.slideUpOverlay,
            },
        },
    };
}
