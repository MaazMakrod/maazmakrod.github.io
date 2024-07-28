import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "../text";
import { COLORS } from "../../styles/theme";

type NavLink = {
  text: string;
  url: string;
  disableHover?: boolean;
}

export type NavigationProps = {
  links: NavLink[];
};

const Navigation: React.FC<NavigationProps> = ({
  links
}) => {
  const [opened, setOpened] = useState(false);

  return (
    <StyledNavigation>
      <StyledHamburger opened={opened} onClick={() => setOpened(!opened)}>
        <StyledHamburgerLine />
        <StyledHamburgerLine />
        <StyledHamburgerLine />
      </StyledHamburger> 
      <StyledMenuItem as="div" disableHover={true}>
        <Text
          text="Maaz Makrod"
          types={['h1', 'bold']}
          tagName="a"
          url="/"
          margin="0"
          color={COLORS.primary}
        />
      </StyledMenuItem>

      <StyledMenuItems opened={opened}>
        {
          links.map((link, index) => (
            <StyledMenuItem key={`nav-link-${index}`} disableHover={link.disableHover}>
              <Text 
                text={link.text}
                types={['h2', 'bold']}
                tagName="a"
                url={link.url}
                color="inherit"
              />
            </StyledMenuItem>
          ))
        }
      </StyledMenuItems>
    </StyledNavigation>
  );
};

const StyledMenuItem = styled.li<{
  disableHover?: boolean;
}>`
  color: ${COLORS.primary};
  transition: all 200ms ease;

  ${props => props.disableHover ? '' : `
    &:hover {
      color: ${COLORS.accent};
    }  
  `}
`;

const StyledMenuItems = styled.ul<{
  opened: boolean;
}>`
  list-style: none;
  background-color: ${COLORS.background};
  width: 100%;
  height: 100vh;
  transform: ${props => props.opened ? 'translateX(0)' : 'translate(-150%)'};
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  text-align: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  gap: 1rem;
  position: absolute;
  top: 0;
`;

const StyledHamburgerLine = styled.span`
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: inherit;
`;

const StyledHamburger = styled.button<{
  opened: boolean;
}>`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
  cursor: pointer;

  display: block;
  height: 26px;
  width: 32px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  :nth-child(1) {
    transform-origin: 0% 0%;
    background: ${COLORS.primary};
    transform: ${props => props.opened ? 'rotate(45deg)' : 'rotate(0deg)'};
    transition: transform 0.4s ease-in-out, background 0.2s ease-in-out;
  }

  :nth-child(2) {
    transform: ${props => props.opened ? 'scaleY(0)' : 'scaleY(1)'};
    background: ${COLORS.primary};
    transition: transform 0.2s ease-in-out, background 0.4s ease-in-out;
  }

  :nth-child(3) {
    transform-origin: 0% 100%;
    background: ${COLORS.primary};
    transform: ${props => props.opened ? 'rotate(-45deg)' : 'rotate(0deg)'};
    transition: transform 0.4s ease-in-out, background 0.6s ease-in-out;
  }

  &:hover {
    :nth-child(1) {
      background: ${COLORS.accent};
    }
    
    :nth-child(2) {
      background: ${COLORS.accent};
    }

    :nth-child(3) {
      background: ${COLORS.accent};
    }
  }
`;

const StyledNavigation = styled.nav`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  z-index: 10;
  position: relative;
`;

export default Navigation;
