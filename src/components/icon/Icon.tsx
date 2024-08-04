import buildStyles, { genHoverStyle, HoverOptions } from "./styles";
import {
  BREAKPOINTS,
  mapCssToBreakpoints,
  Position,
  StylesValue,
} from "../../styles/helpers";
import React from "react";
import styled from "styled-components";

export type IconProps = {
  tag: "div" | "a" | "button";
  width: StylesValue;
  height: StylesValue;
  onClick?: () => void;
  url?: string;
  target?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SvgImage: React.FC<any> | string;
  color?: string;
  stroke?: string;
  strokeWidth?: string;
  hoverOptions?: HoverOptions;
  position?: Position;
  parentHover?: boolean;
  zIndex?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  svgProps?: any;
};

const Icon: React.FC<IconProps> = ({
  tag,
  SvgImage,
  width,
  height,
  color,
  position,
  parentHover,
  hoverOptions,
  onClick,
  url,
  zIndex,
  stroke,
  strokeWidth,
  svgProps,
  target,
}) => {
  const renderContent = () => {
    if (typeof SvgImage === "string") {
      return <img src={SvgImage} />
    } else {
      return <SvgImage {...svgProps} />;
    }
  }

  return (
    <StyledSvgWrapper
      as={tag}
      width={width}
      height={height}
      color={color}
      pointer={tag === "a" || tag === "button"}
      hoverOptions={hoverOptions}
      position={position}
      parentHover={parentHover}
      zIndex={zIndex}
      stroke={stroke}
      strokeWidth={strokeWidth}
      {...(tag === "button" && { onClick: onClick })}
      {...(tag === "a" && { href: url, target: target })}
    >
      {renderContent()}
    </StyledSvgWrapper>
  );
};

const StyledSvgWrapper = styled.div<
  Pick<
    IconProps,
    | "height"
    | "width"
    | "color"
    | "hoverOptions"
    | "position"
    | "parentHover"
    | "zIndex"
    | "stroke"
    | "strokeWidth"
  > & {
    pointer: boolean;
  }
>`
  box-sizing: border-box;
  display: block;
  cursor: ${(props) => (props.pointer ? "pointer" : "auto")};
  z-index: ${(props) => props.zIndex};
  stroke: ${(props) => props.stroke};
  strokewidth: ${(props) => props.strokeWidth};

  ${(props) =>
    props.pointer
      ? `
          background: none;
          color: inherit;
          border: none;
          padding: 0;
          font: inherit;
          outline: inherit;`
      : ""}

  ${(props) =>
    props.position
      ? `
          position: absolute;
          top: ${props.position.top}%;
          bottom: ${props.position.bottom}%;
          left: ${props.position.left}%;
          right: ${props.position.right}%;
        `
      : ""}

  ${(props) =>
    buildStyles(props.width, props.height, props.color, props.hoverOptions)}

  ${(props) =>
    props.parentHover && props.hoverOptions
      ? mapCssToBreakpoints({
          [BREAKPOINTS.DEFAULT]: genHoverStyle(
            props.hoverOptions.color,
            props.hoverOptions?.filter,
          ),
        })
      : ""}
`;

export default Icon;
