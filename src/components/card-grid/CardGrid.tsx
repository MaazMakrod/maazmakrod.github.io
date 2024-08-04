import buildStyles, { buildGridChildStyles } from "./styles";
import { BREAKPOINTS, StylesValue } from "../../styles/helpers";
import React, { ReactNode } from "react";
import styled from "styled-components";

export type GridPosition = {
  [key in BREAKPOINTS]?: [number, number];
};

type CardGridChild = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ReactNode;
  startCoordinate: GridPosition;
  endCoordinate?: GridPosition;
  display?: StylesValue;
};

export type CardGridProps = {
  width: StylesValue;
  height: StylesValue;
  gap: StylesValue;
  numberRows: StylesValue;
  numberCols: StylesValue;
  childComponents: Array<CardGridChild>;
};

const CardGrid: React.FC<CardGridProps> = ({
  width,
  height,
  numberRows,
  numberCols,
  gap,
  childComponents,
}) => {
  return (
    <StyledCardGridWrapper
      numberCols={numberCols}
      numberRows={numberRows}
      width={width}
      height={height}
      gap={gap}
    >
      {childComponents.map((child, i) => (
        <StyledCardGridChild
          startCoordinate={child.startCoordinate}
          endCoordinate={child?.endCoordinate}
          display={child?.display}
          key={`card-grid-child-${i}`}
        >
          {child.component}
        </StyledCardGridChild>
      ))}
    </StyledCardGridWrapper>
  );
};

const StyledCardGridWrapper = styled.div<
  Pick<CardGridProps, "numberCols" | "numberRows" | "width" | "height" | "gap">
>`
  display: grid;
  box-sizing: border-box;
  ${(props) =>
    buildStyles(
      props.width,
      props.height,
      props.gap,
      props.numberRows,
      props.numberCols,
    )}
`;

const StyledCardGridChild = styled.div<
  Pick<CardGridChild, "startCoordinate" | "endCoordinate" | "display">
>`
  box-sizing: border-box;
  ${(props) =>
    buildGridChildStyles(
      props.startCoordinate,
      props?.endCoordinate,
      props?.display,
    )};
`;

export default CardGrid;
