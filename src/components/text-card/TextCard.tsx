import React from "react";
import Text, { TextObject, TextProps } from "../text/Text";
import CardWrapper, { CardWrapperProps } from "../card-wrapper/CardWrapper";
import styled from "styled-components";

export type TextCardProps = {
  cardWrapperProps: CardWrapperProps;
  textProps: Array<TextProps | TextObject>;
  horizontalPosition?: "left" | "middle" | "right";
  verticalPosition?: "top" | "middle" | "bottom";
  useFlex?: boolean;
};

const positionToFlexName = (position: string = "") => {
  if (position === "left" || position === "top") {
    return "flex-start";
  }

  if (position === "right" || position === "bottom") {
    return "flex-end";
  }

  return "center";
};

const TextCard: React.FC<TextCardProps> = ({
  cardWrapperProps,
  textProps,
  horizontalPosition,
  verticalPosition,
  useFlex = true,
}) => {
  return (
    <CardWrapper {...cardWrapperProps}>
      <StyledTextContainer
        useFlex={useFlex}
        horizontal={positionToFlexName(horizontalPosition)}
        vertical={positionToFlexName(verticalPosition)}
      >
        {textProps.map((args, i) => (
          <Text
            {...args}
            key={`text-card-text-${i}-${args?.text ?? args?.content?.text}`}
          />
        ))}
      </StyledTextContainer>
    </CardWrapper>
  );
};

const StyledTextContainer = styled.div<{
  horizontal: string;
  vertical: string;
  useFlex: boolean;
}>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  ${(props) =>
    props.useFlex
      ? `
      display: flex;
      justify-content: ${props.horizontal};
      align-items: ${props.vertical};
      text-align:  ${props.horizontal === 'flex-end' ? 'right' : 'left'};
    `
      : ""}
`;

export default TextCard;
