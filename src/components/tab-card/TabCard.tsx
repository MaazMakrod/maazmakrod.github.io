import {
  BREAKPOINTS,
  mapCssToBreakpoints,
  mapStylesValuesToBreakpoints,
  StylesValue,
} from "../../styles/helpers";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import Text from "../text/Text";
import CardGrid from "../card-grid/CardGrid";
import CardWrapper, { CardWrapperProps } from "../card-wrapper/CardWrapper";
import DetailsCard, { DetailsProps } from "./DetailsCards";
import TechnologiesList, { TechnologyListProps } from "./TechnologiesList";
import { flushSync } from "react-dom";

type TabButtonStyle = {
  containerColor: string;
  buttonColor: string;
  buttonHoverColor: string;
  buttonBoxShadow: string;
  textColor: string;
};

type DetailsCard = DetailsProps &
  TechnologyListProps & {
    cardWrapperProps: CardWrapperProps;
  };

export type TabCardProps = {
  tabs: Array<{
    logo: ReactNode;
    mainContent: ReactNode;
    details: DetailsCard;
    buttonText: string;
  }>;
  tabButtonStyle: TabButtonStyle;
  width: StylesValue;
};

const composeTabArgs = (
  logo: ReactNode,
  details: DetailsCard,
  mainContent: ReactNode,
) => {
  return {
    width: {
      [BREAKPOINTS.DEFAULT]: "auto",
    },
    height: {
      [BREAKPOINTS.DEFAULT]: "auto",
    },
    numberRows: {
      [BREAKPOINTS.DEFAULT]: "auto",
      [BREAKPOINTS.MEDIUM]: "7",
    },
    numberCols: {
      [BREAKPOINTS.DEFAULT]: "1",
      [BREAKPOINTS.MEDIUM]: "7",
    },
    gap: {
      [BREAKPOINTS.DEFAULT]: "1rem",
    },
    childComponents: [
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 1],
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [2, 2],
        },
        display: {
          [BREAKPOINTS.DEFAULT]: "none",
          [BREAKPOINTS.MEDIUM]: "unset",
        },
        component: logo,
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 1],
          [BREAKPOINTS.MEDIUM]: [1, 3],
        },
        endCoordinate: {
          [BREAKPOINTS.MEDIUM]: [2, 7],
        },
        component: (
          <CardWrapper {...details.cardWrapperProps}>
            <DetailsCard
              companyName={details.companyName}
              position={details.position}
              description={details.description}
              underlineColor={details.underlineColor}
              textColor={details.textColor}
              positionLength={details.positionLength}
            />
            <TechnologiesList
              technologies={details.technologies}
              technologyProps={details.technologyProps}
            />
          </CardWrapper>
        ),
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 2],
          [BREAKPOINTS.MEDIUM]: [3, 1],
        },
        endCoordinate: {
          [BREAKPOINTS.MEDIUM]: [7, 7],
        },
        component: mainContent,
      },
    ],
  };
};

const TabCard: React.FC<TabCardProps> = ({ tabs, tabButtonStyle, width }) => {
  const [active, setActive] = useState<number>(0);
  const [display, setDispay] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(0);

  const handleTabChange = (i: number) => {
    flushSync(() => {
      setOpacity(i);
    });
    flushSync(() => {
      setTimeout(() => setDispay(i), 300);
    });
    flushSync(() => {
      setTimeout(() => setActive(i), 350);
    });
  };

  return (
    <StyledTabContainer width={width}>
      <StyledTabItems {...tabButtonStyle}>
        {tabs.map((t, index) => (
          <StyledTabItem
            key={`tab-button-${t.buttonText}`}
            active={index === active}
            {...tabButtonStyle}
            onClick={() => handleTabChange(index)}
          >
            <Text
              color={tabButtonStyle.textColor}
              text={t.buttonText}
              tagName="span"
              types={["p", "bold"]}
            />
          </StyledTabItem>
        ))}
      </StyledTabItems>

      <StyledTabContentContainer>
        {tabs.map((t, index) => (
          <StyledTabContent
            active={index === active}
            display={index === display}
            opacity={index === opacity}
            key={`tab-content-${t.buttonText}`}
          >
            <CardGrid {...composeTabArgs(t.logo, t.details, t.mainContent)} />
          </StyledTabContent>
        ))}
      </StyledTabContentContainer>
    </StyledTabContainer>
  );
};

const StyledTabContainer = styled.div<Pick<TabCardProps, "width">>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  gap: 1rem;

  ${(props) =>
    mapCssToBreakpoints(
      mapStylesValuesToBreakpoints({
        width: props.width,
      }),
    )}
`;

const StyledTabItems = styled.div<Pick<TabButtonStyle, "containerColor">>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: safe center;
  gap: 2rem;
  padding: 10px;
  background-color: ${(props) => props.containerColor};
  border-radius: 5px;

  overflow-x: scroll;
  scrollbar-width: none;
  &::webkit-scrollbar: {
    display: none;
  }
`;

const StyledTabItem = styled.button<
  Pick<
    TabButtonStyle,
    "buttonBoxShadow" | "buttonColor" | "buttonHoverColor"
  > & { active?: boolean }
>`
  box-sizing: border-box;
  padding: 5px 1rem;
  border-radius: 5px;
  border: none;
  width: fit-content;
  min-width: fit-content;
  height: 2rem;
  background-color: ${(props) =>
    props.active ? props.buttonHoverColor : props.buttonColor};

  cursor: pointer;
  box-shadow: ${(props) => (props.active ? props.buttonBoxShadow : "")};

  transition:
    box-shadow 0.5s,
    background-color 0.5s;

  &:hover {
    background-color: ${(props) => props.buttonHoverColor};
    box-shadow: ${(props) => props.buttonBoxShadow};
  }
`;

const StyledTabContentContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr;
`;

const StyledTabContent = styled.div<{
  active: boolean;
  display: boolean;
  opacity: boolean;
}>`
  box-sizing: border-box;
  width: 100%;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: span 1;
  padding: 10px;
  transition:
    opacity 0.3s,
    transform 1s;
  opacity: ${(props) => (props.opacity ? "1" : "0")};
  transform: ${(props) =>
    props.active ? "translateX(0%)" : "translateX(100%)"};
  display: ${(props) => (props.display ? "auto" : "none")};
`;

export default TabCard;
