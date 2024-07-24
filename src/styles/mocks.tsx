import { BREAKPOINTS } from "./helpers";
import { TextProps, TypesOptions } from "../components/text/Text";
import { CardWrapperProps } from "../components/card-wrapper/CardWrapper";
import { IconProps } from "../components/icon/Icon";
import ImageCard, { ImageCardProps } from "../components/image-card/ImageCard";
import TextCard from "../components/text-card/TextCard";

export const MOCK_CARD_WRAPPER_PROPS = (): CardWrapperProps => ({
  backgroundColor: "#f5efe6",
  width: { [BREAKPOINTS.DEFAULT]: "50vw" },
  height: { [BREAKPOINTS.DEFAULT]: "50vh" },
  borderRadius: { [BREAKPOINTS.DEFAULT]: "20px" },
  cardWrapperStyles: {
    blob: true,
    blobOptions: {
      animateBlobPosition: true,
      pulseBlob: true,
      growBlob: true,
      color: "#7895b1",
      border: "#aebdca 10px solid",
      outline: "#dae3e8 10px solid",
      width: {
        default: "150px",
        small: "200px",
        medium: "250px",
        large: "350px",
      },
      height: {
        default: "150px",
        small: "200px",
        medium: "250px",
        large: "350px",
      },
      [BREAKPOINTS.DEFAULT]: {
        "border-radius": "60% 40% 30% 70% / 100% 85% 92% 74%",
      },
      blobStartPosition: {
        top: 0,
        left: 20,
      },
      pulseOptions: {
        color: "#dae3e8ff",
        spread: "10rem",
        animationOptions: { timing: 2000, options: "infinite" },
      },
      blobMovementOptions: {
        animationOptions: {
          timing: 10000,
          options:
            "cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate forwards",
        },
      },
    },
    animateCardHover: true,
    overlay: false,
    overlayOptions: {
      slideUpOverlay: true,
    },
    cardAnimationOptions: {
      boxShadow: "0 15px 20px rgb(184 209 223), 0 0 5px rgba(0, 0, 0, 0.1)",
    },
  },
});

export const MOCK_TEXT_PROPS = (
  text: string = "Hello World",
  types: Array<TypesOptions> = ["h1"],
  tagName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" = "h1",
): TextProps[] => {
  return [
    {
      text,
      types,
      tagName,
      fade: true,
      underline: true,
      underlineColor: "black 0 0",
      underlineSize: {
        [BREAKPOINTS.DEFAULT]: "3px",
      },
    },
  ];
};

export const MOCK_ICON_PROPS = (): Partial<IconProps> => ({
  tag: "div",
  width: {
    [BREAKPOINTS.DEFAULT]: "50px",
  },
  height: {
    [BREAKPOINTS.DEFAULT]: "50px",
  },
  color: "#7895b1",
  hoverOptions: {
    color: "#aebdca",
    timing: 1000,
    filter: "drop-shadow(10px 10px 4px #dae3e8)",
    easingFunction: "ease-in-out",
  },
});

export const MOCK_IMAGE_CARD_PROPS = (): ImageCardProps => ({
  cardWrapperProps: MOCK_CARD_WRAPPER_PROPS(),
  src: "https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg",
  alt: "Mountains Image",
  objectFit: "cover",
  imageWidth: { [BREAKPOINTS.DEFAULT]: '100%' },
  imageHeight: { [BREAKPOINTS.DEFAULT]: '100%' },
});

export const MOCK_CAROUSEL_PROPS = (inheritDimensions?: boolean) => {
  const imageCardProps = {
    cardWrapperProps: {
      width: { [BREAKPOINTS.DEFAULT]: "inherit" },
      height: { [BREAKPOINTS.DEFAULT]: "inherit" },
      cardWrapperStyles: {},
    },
    alt: "Image",
    objectFit: "cover",
  };

  return {
    width: { [BREAKPOINTS.DEFAULT]: inheritDimensions ? "100%" : "50vw" },
    height: { [BREAKPOINTS.DEFAULT]: inheritDimensions ? "100%" : "50vh" },
    slides: [
      <ImageCard
        {...imageCardProps}
        src="https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg"
        key={1}
      />,
      <ImageCard
        {...imageCardProps}
        src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg"
        key={2}
      />,
      <ImageCard
        {...imageCardProps}
        src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720224000&semt=sph"
        key={3}
      />,
      <ImageCard
        {...imageCardProps}
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        key={4}
      />,
      <TextCard
        cardWrapperProps={{
          ...MOCK_CARD_WRAPPER_PROPS(),
          width: { [BREAKPOINTS.DEFAULT]: inheritDimensions ? "100%" : "50vw" },
          height: {
            [BREAKPOINTS.DEFAULT]: inheritDimensions ? "100%" : "50vh",
          },
        }}
        textProps={MOCK_TEXT_PROPS()}
        key={5}
      />,
    ],
    borderRadius: {
      [BREAKPOINTS.DEFAULT]: "20px",
    },
    autoplay: true,
    playBtn: true,
    playBtnProps: {
      position: {
        top: 5,
        right: 5,
      },
      width: { [BREAKPOINTS.DEFAULT]: "50px" },
      height: { [BREAKPOINTS.DEFAULT]: "50px" },
      color: "#e7e1d7",
      hoverOptions: {
        color: "#7895b1",
        timing: 1000,
        easingFunction: "ease-in-out",
      },
    },
    paginationBullets: true,
    paginationBulletOptions: {
      backgroundColor: "#f5efe661",
      size: 10,
      color: "#dae3e8",
      hoverOptions: {
        color: "#7895b1",
        timing: 500,
      },
    },
  };
};
