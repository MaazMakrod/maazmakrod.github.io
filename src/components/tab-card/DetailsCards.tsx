/* eslint-disable react/prop-types */
import Text from "../text/Text";
import { BREAKPOINTS } from "../../styles/helpers";

export type DetailsProps = {
  companyName: string;
  position: string;
  description: string;
  underlineColor: string;
};

const DetailsCard: React.FC<DetailsProps> = ({
  companyName,
  position,
  description,
  underlineColor,
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
      />
      <Text text={position} tagName="h2" types={["h6"]} uppercase fade />
      <Text text="16 Months" tagName="p" types={["p"]} fade />
      <Text text={description} tagName="p" types={["pLarge"]} fade />
    </div>
  );
};

export default DetailsCard;
