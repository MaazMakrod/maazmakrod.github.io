import { BREAKPOINTS } from "../../styles/helpers";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import Text from "../text/Text";
import CardGrid from "../card-grid/CardGrid";
import CardWrapper, { CardWrapperProps } from "../card-wrapper/CardWrapper";
import DetailsCard, { DetailsProps } from "./DetailsCards";
import TechnologiesList, { TechnologyListProps } from "./TechnologiesList";

type TabButtonStyle = {
  containerColor: string;
  buttonColor: string;
  buttonHoverColor: string;
  buttonBoxShadow: string;
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
      [BREAKPOINTS.DEFAULT]: "7",
    },
    numberCols: {
      [BREAKPOINTS.DEFAULT]: "7",
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
        component: logo,
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 3],
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [2, 7],
        },
        component: (
          <CardWrapper {...details.cardWrapperProps}>
            <DetailsCard
              companyName={details.companyName}
              position={details.position}
              description={details.description}
              underlineColor={details.underlineColor}
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
          [BREAKPOINTS.DEFAULT]: [3, 1],
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [7, 7],
        },
        component: mainContent,
      },
    ],
  };
};

// TODO: Remove use of gen random key function
const TabCard: React.FC<TabCardProps> = ({ tabs, tabButtonStyle }) => {
  const [active, setActive] = useState<number>(0);
  const handleTabChange = (i: number) => setActive(i);

  return (
    <StyledTabContainer>
      <StyledTabItems {...tabButtonStyle}>
        {tabs.map((t, index) => (
          <StyledTabItem
            key={`tab-button-${t.buttonText}`}
            active={index === active}
            {...tabButtonStyle}
            onClick={() => handleTabChange(index)}
          >
            <Text text={t.buttonText} tagName="span" types={["p", "bold"]} />
          </StyledTabItem>
        ))}
      </StyledTabItems>

      <StyledTabContentContainer>
        {tabs.map((t, index) => (
          <StyledTabContent
            active={index === active}
            key={`tab-content-${t.buttonText}`}
          >
            <CardGrid {...composeTabArgs(t.logo, t.details, t.mainContent)} />
          </StyledTabContent>
        ))}
      </StyledTabContentContainer>
    </StyledTabContainer>
  );
};

const StyledTabContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 80vw;
  background-color: transparent;
  gap: 1rem;
`;

const StyledTabItems = styled.div<Pick<TabButtonStyle, "containerColor">>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
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
  padding: 5px;
  border-radius: 5px;
  border: none;
  width: fit-content;
  min-width: 10rem;
  height: 2rem;
  background-color: ${(props) =>
    props.active ? props.buttonColor : props.buttonHoverColor};

  cursor: pointer;
  box-shadow: ${(props) => (props.active ? props.buttonBoxShadow : "")};

  transition:
    box-shadow 0.5s,
    background-color 0.5s;

  &:hover {
    background-color: ${(props) => props.buttonColor};
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

const StyledTabContent = styled.div<{ active: boolean }>`
  box-sizing: border-box;
  width: 100%;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: span 1;
  padding: 50px;
  transition:
    opacity 1s,
    transform 1s;
  opacity: ${(props) => (props.active ? "1" : "0")};
  transform: ${(props) =>
    props.active ? "translateX(0%)" : "translateX(100%)"};
`;

export default TabCard;
