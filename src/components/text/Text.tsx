import React, { ReactNode } from "react";
import styled from "styled-components";
import buildStyles from "./styles";
import { StylesValue } from "../../styles/helpers";
import { FONT } from "../../styles/theme";

export type TypesOptions =
  | "thin"
  | "regular"
  | "medium"
  | "bold"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "pLarge";

type TextOptions = {
  tagName:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "a"
    | "ul"
    | "li"
    | "ol";
  types?: Array<TypesOptions>;
  underline?: boolean;
  fade?: boolean;
  uppercase?: boolean;
  color?: string;
  margin?: string;
  underlineColor?: string;
  underlineSize?: StylesValue;
  url?: string;
  target?: string;
  disabled?: boolean;
};

export type TextProps = TextOptions & {
  text: string;
};

export type TextObject = {
  content: TextProps & {
    nestedText?: TextObject[];
  };
};

const parseText = (data: TextObject): ReactNode => {
  const {
    tagName,
    types,
    fade,
    underline,
    uppercase,
    color,
    margin,
    text,
    underlineColor,
    underlineSize,
    url,
    target,
    disabled,
  } = data.content;

  return (
    <StyledText
      as={tagName}
      types={types}
      fade={fade}
      underline={underline}
      color={color}
      uppercase={uppercase}
      margin={margin}
      underlineColor={underlineColor}
      underlineSize={underlineSize}
      disabled={disabled}
      {...(tagName === "a" && { href: url, target: target })}
    >
      {text}
      {data.content?.nestedText && data.content.nestedText.map(parseText)}
    </StyledText>
  );
};

const Text: React.FC<TextProps | TextObject> = (props) => {
  let data: TextObject | undefined;

  if (props?.text) {
    data = {
      content: props as TextProps,
    };
  } else {
    data = props as TextObject;
  }

  return parseText(data);
};

const StyledText = styled.div<
  Pick<
    TextProps,
    | "types"
    | "fade"
    | "color"
    | "underline"
    | "uppercase"
    | "margin"
    | "underlineColor"
    | "underlineSize"
    | "disabled"
  >
>`
  font-family: ${FONT};
  box-sizing: border-box;

  ${(props) =>
    buildStyles(
      props.types,
      props.underline,
      props.fade,
      props.uppercase,
      props.color,
      props.margin,
      props.underlineColor,
      props.underlineSize,
      props.disabled,
    )}
`;

export default Text;
