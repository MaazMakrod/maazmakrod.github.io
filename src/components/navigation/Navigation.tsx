import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "../text";
import { COLORS, NAVIGATION_HEIGHT } from "../../styles/theme";
import { PathMatch } from "react-router-dom";
import { BREAKPOINTS, mapCssToBreakpoints } from "../../styles/helpers";
import { APP_BASE } from "../../utils/constants";
type NavLink = {
  text: string;
  url: string;
  disableHover?: boolean;
};

export type NavigationProps = {
  links: NavLink[];
  activeLink: {
    [key: string]: PathMatch<string> | null;
  };
};

const Navigation: React.FC<NavigationProps> = ({ links, activeLink }) => {
  const [opened, setOpened] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    if (display) {
      setOpened(false);
      setTimeout(() => setDisplay(false), 500);
    } else {
      setDisplay(true);
      setTimeout(() => setOpened(true), 100);
    }
  };

  return (
    <StyledNavigation>
      <StyledHamburger opened={opened} onClick={() => handleClick()}>
        <StyledHamburgerLine />
        <StyledHamburgerLine />
        <StyledHamburgerLine />
      </StyledHamburger>

      <StyledMenuItem as="div" active={Boolean(activeLink[links?.[0]?.text])}>
        <Text
          text="Maaz Makrod"
          types={["h1", "bold"]}
          tagName="a"
          url={APP_BASE}
          margin="0"
          color="inherit"
          disabled={Boolean(activeLink[links?.[0]?.text])}
        />
      </StyledMenuItem>

      <StyledMenuItems opened={opened} display={display}>
        {links.map((link, index) => {
          return (
            <StyledMenuItem
              key={`nav-link-${index}`}
              disableHover={link.disableHover}
              active={Boolean(activeLink[link.text])}
              onClick={() => handleClick()}
            >
              <Text
                text={link.text}
                types={["h2", "bold"]}
                tagName="a"
                url={link.url}
                color="inherit"
                disabled={Boolean(activeLink[link.text])}
              />
            </StyledMenuItem>
          );
        })}
      </StyledMenuItems>
    </StyledNavigation>
  );
};

const StyledMenuItem = styled.li<{
  disableHover?: boolean;
  active?: boolean;
}>`
  color: ${(props) => (props.active ? COLORS.accent : COLORS.primary)};
  transition: all 200ms ease;

  ${(props) =>
    props.disableHover
      ? ""
      : `
    &:hover {
      color: ${COLORS.accent};
    }  
  `}
`;

const StyledMenuItems = styled.ul<{
  opened: boolean;
  display: boolean;
}>`
  list-style: none;
  background-color: ${COLORS.background};
  width: 100%;
  height: 100vh;
  transform: ${(props) =>
    props.opened ? "translateX(0)" : "translate(-150%)"};
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  text-align: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  gap: 1rem;
  position: absolute;
  top: 0;
  display: ${(props) => (props.display ? "flex" : "none")};
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
    transform: ${(props) => (props.opened ? "rotate(45deg)" : "rotate(0deg)")};
    transition:
      transform 0.4s ease-in-out,
      background 0.2s ease-in-out;
  }

  :nth-child(2) {
    transform: ${(props) => (props.opened ? "scaleY(0)" : "scaleY(1)")};
    background: ${COLORS.primary};
    transition:
      transform 0.2s ease-in-out,
      background 0.4s ease-in-out;
  }

  :nth-child(3) {
    transform-origin: 0% 100%;
    background: ${COLORS.primary};
    transform: ${(props) => (props.opened ? "rotate(-45deg)" : "rotate(0deg)")};
    transition:
      transform 0.4s ease-in-out,
      background 0.6s ease-in-out;
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
  box-sizing: border-box;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${NAVIGATION_HEIGHT};
  z-index: 10;
  position: sticky;
  top: 0;
  background-color: ${COLORS.background}cf;

  ${mapCssToBreakpoints({
    [BREAKPOINTS.MEDIUM]: {
      position: "relative",
      top: "auto",
    },
  })}
`;

export default Navigation;
