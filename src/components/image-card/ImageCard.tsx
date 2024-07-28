import React from "react";
import CardWrapper, { CardWrapperProps } from "../card-wrapper/CardWrapper";
import styled from "styled-components";
import {
  BREAKPOINTS,
  mapCssToBreakpoints,
  mapStylesValuesToBreakpoints,
  StylesValue,
} from "../../styles/helpers";

export type ImageCardProps = {
  cardWrapperProps: CardWrapperProps;
  src: string;
  alt: string;
  aspectRatio?: string;
  objectFit?: string;
  imageWidth: StylesValue;
  imageHeight: StylesValue;
  lazyLoad?: boolean;
};

const ImageCard: React.FC<ImageCardProps> = ({
  cardWrapperProps,
  src,
  alt,
  aspectRatio,
  objectFit,
  imageWidth = { [BREAKPOINTS.DEFAULT]: "100%" },
  imageHeight = { [BREAKPOINTS.DEFAULT]: "100%" },
  lazyLoad,
}) => {
  return (
    <CardWrapper {...cardWrapperProps}>
      <StyledImage
        src={src}
        alt={alt}
        aspectRatio={aspectRatio}
        objectFit={objectFit}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
        {...(lazyLoad && {loading: "lazy"})}
      />
    </CardWrapper>
  );
};

const StyledImage = styled.img<
  Pick<
    ImageCardProps,
    "imageWidth" | "imageHeight" | "aspectRatio" | "objectFit"
  >
>`
  ${(props) =>
    mapCssToBreakpoints(
      mapStylesValuesToBreakpoints({
        width: props.imageWidth,
        height: props.imageHeight,
      }),
    )}
  aspect-ratio: ${(props) => props.aspectRatio};
  object-fit: ${(props) => props.objectFit};
`;

export default ImageCard;
