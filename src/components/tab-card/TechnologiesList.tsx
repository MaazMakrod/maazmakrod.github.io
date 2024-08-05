/* eslint-disable react/prop-types */
import styled from "styled-components";
import Text from "../text/Text";

type TechnologyStyles = {
  backgroundColor: string;
  outlineColor: string;
  filterColor: string;
  textColor: string;
};

export type TechnologyListProps = {
  technologies: Array<string>;
  technologyProps: TechnologyStyles;
};

const TechnologiesList: React.FC<TechnologyListProps> = ({
  technologies,
  technologyProps,
}) => {
  const { textColor, ...technologyStyles } = technologyProps;

  return (
    <StyledTechnologies>
      {technologies.map((technology) => (
        <StyledTechnology
          key={`technology-${technology}`}
          {...technologyStyles}
        >
          <Text
            text={technology}
            tagName="span"
            types={["h6", "bold"]}
            uppercase
            color={textColor}
          />
        </StyledTechnology>
      ))}
    </StyledTechnologies>
  );
};

const StyledTechnologies = styled.ul`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding-left: 0px;
`;

const StyledTechnology = styled.li<
  Pick<TechnologyStyles, "backgroundColor" | "filterColor" | "outlineColor">
>`
  width: fit-content;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.backgroundColor};
  position: relative;
  border-radius: 5px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    border-radius: 5px;
    width: 105%;
    transition: all 0.4s;
  }
  &::before {
    left: 0%;
    height: 130%;
    background: ${(props) => props.outlineColor};
  }
  &::after {
    left: -10%;
    height: 120%;
    background: ${(props) => props.filterColor};
    backdrop-filter: blur(10px);
  }
  &:hover::before {
    transform: translateX(-2.5%);
  }
  &:hover::after {
    transform: translateX(15%);
  }
`;

export default TechnologiesList;
