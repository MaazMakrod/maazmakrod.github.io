import Text from "../text/Text";
import { BREAKPOINTS } from "../../styles/helpers";

export type DetailsProps = {
  companyName: string;
  position: string;
  description: string;
  underlineColor: string;
  textColor: string;
  positionLength: string;
};

const DetailsCard: React.FC<DetailsProps> = ({
  companyName,
  position,
  description,
  underlineColor,
  textColor,
  positionLength,
}) => {
  return (
    <div>
      <Text
        text={companyName}
        tagName="h1"
        types={["h2"]}
        margin="0"
        fade
        underline
        underlineColor={underlineColor}
        underlineSize={{ [BREAKPOINTS.DEFAULT]: "3px" }}
        color={textColor}
      />
      <Text
        text={position}
        color={textColor}
        tagName="h2"
        types={["h6"]}
        uppercase
        fade
      />
      <Text
        text={positionLength}
        color={textColor}
        tagName="p"
        types={["p", "bold"]}
        fade
      />
      <Text
        text={description}
        color={textColor}
        tagName="p"
        types={["pLarge", "bold"]}
        fade
      />
    </div>
  );
};

export default DetailsCard;
