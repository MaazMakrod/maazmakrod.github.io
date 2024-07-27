import React from "react";
import styled from "styled-components";
import { StylesValue } from "../../styles/helpers";

export type NavigationProps = {
    text: string;
};

const Navigation: React.FC<NavigationProps> = ({
    text
}) => {
  return text;
};

const StyledNavigation = styled.div<
  Pick<
    NavigationProps,
    'text'
  >
>`
`;

export default Navigation;
