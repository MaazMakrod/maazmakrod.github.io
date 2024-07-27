import buildStyles, { CardWrapperStyles } from "./styles";
import React, { PropsWithChildren, ReactNode, useState } from "react";
import styled from "styled-components";
import Icon, { IconProps } from "../icon/Icon";
import {
  mapCssToBreakpoints,
  mapStylesValuesToBreakpoints,
  StylesValue,
} from "../../styles/helpers";

export type CardWrapperProps = PropsWithChildren<{
  width?: StylesValue;
  height?: StylesValue;
  padding?: StylesValue;
  backgroundColor?: string;
  borderRadius?: StylesValue;
  overlayBackgroundColor?: string;
  overlay?: ReactNode;
  icon?: IconProps;
  centerContent?: boolean;
  cardWrapperStyles?: CardWrapperStyles;
}>;

const CardWrapper: React.FC<CardWrapperProps> = ({
  width,
  height,
  backgroundColor,
  borderRadius,
  overlay,
  cardWrapperStyles,
  overlayBackgroundColor,
  icon,
  centerContent,
  padding,
  children,
}) => {
  const [hover, setHover] = useState(false);
  const cardProps = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    cardWrapperStyles: cardWrapperStyles,
    centerContent: centerContent,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };

  let as: "div" | "button" | "a" = "div";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cardArgs: any;

  if (icon?.url) {
    as = "a";
    cardArgs = {
      href: icon.url,
      target: icon?.target,
    };
  }

  if (icon?.onClick) {
    as = "button";
    cardArgs = {
      onClick: icon.onClick,
    };
  }

  if (overlay) {
    return (
      <StyledCardWrapper {...cardProps} as={as} {...cardArgs}>
        {icon && <Icon {...icon} parentHover={hover} />}
        <StyledOverlay className="overlay">
          <StyledContentWrapper padding={padding} centerContent={centerContent}>
            {overlay}
          </StyledContentWrapper>
        </StyledOverlay>
        <StyledOverlayContent
          className="content"
          backgroundColor={overlayBackgroundColor}
        >
          <StyledContentWrapper padding={padding} centerContent={centerContent}>
            {children}
          </StyledContentWrapper>
        </StyledOverlayContent>
      </StyledCardWrapper>
    );
  }

  return (
    <StyledCardWrapper {...cardProps} as={as} {...cardArgs}>
      <StyledContentWrapper padding={padding} centerContent={centerContent}>
        {icon && <Icon {...icon} parentHover={hover} />}
        {children}
      </StyledContentWrapper>
    </StyledCardWrapper>
  );
};

const StyledOverlay = styled.div`
  box-sizing: border-box;
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
`;

const StyledOverlayContent = styled.div<{
  backgroundColor?: string;
}>`
  box-sizing: border-box;
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${(props) => props.backgroundColor ?? "transparent"};
  transition: transform 1s;
`;

const StyledContentWrapper = styled.div<
  Pick<CardWrapperProps, "centerContent" | "padding">
>`
  box-sizing: border-box;

  height: 100%;
  width: 100%;

  ${(props) =>
    props.centerContent
      ? `
      display: flex;
      justify-content: center;
      align-items: center;
    `
      : ""}

  ${(props) =>
    mapCssToBreakpoints(
      mapStylesValuesToBreakpoints({
        padding: props.padding,
      }),
    )};
`;

const StyledCardWrapper = styled.div<
  Pick<
    CardWrapperProps,
    | "width"
    | "backgroundColor"
    | "height"
    | "cardWrapperStyles"
    | "borderRadius"
  >
>`
  display: inline-block;
  text-decoration: none;
  border: none;

  box-sizing: border-box;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor};

  ${(props) =>
    props.cardWrapperStyles
      ? buildStyles(
          props.cardWrapperStyles as CardWrapperStyles,
          props.width,
          props.height,
          props.borderRadius,
        )
      : ""}
`;

export default CardWrapper;
