import { Link } from "../../icons";
import { BREAKPOINTS } from "../../styles/helpers";
import { COLORS } from "../../styles/theme";
import { Icon } from "../icon";
import { Text } from "../text";

const Footer = () => {
  return (
  <footer style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '5px'
  }}>
      <Text text={`© Maaz Makrod, ${new Date().getFullYear()}`} tagName="p" types={['p', 'bold']} color={COLORS.primary} margin="0" />
      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: '10px',
      }}>
        <Icon 
          SvgImage={Link}
          tag="a"
          url="https://www.linkedin.com/in/maaz-makrod/"
          width={{
            [BREAKPOINTS.DEFAULT]: '24px'
          }}
          height={{
            [BREAKPOINTS.DEFAULT]: '24px'
          }}
          color={COLORS.primary}
          hoverOptions={{
            color: COLORS.accent,
            timing: 500,
            filter: `drop-shadow(2px 5px 10px ${COLORS.accent})`,
          }}
        />
        <Icon 
          SvgImage={Link}
          tag="a"
          url="https://www.linkedin.com/in/maaz-makrod/"
          width={{
            [BREAKPOINTS.DEFAULT]: '24px'
          }}
          height={{
            [BREAKPOINTS.DEFAULT]: '24px'
          }}
          color={COLORS.primary}
          hoverOptions={{
            color: COLORS.accent,
            timing: 500,
            filter: `drop-shadow(2px 5px 10px ${COLORS.accent})`,
          }}
        />
        <Icon 
          SvgImage={Link}
          tag="a"
          url="https://www.linkedin.com/in/maaz-makrod/"
          width={{
            [BREAKPOINTS.DEFAULT]: '24px'
          }}
          height={{
            [BREAKPOINTS.DEFAULT]: '24px'
          }}
          color={COLORS.primary}
          hoverOptions={{
            color: COLORS.accent,
            timing: 500,
            filter: `drop-shadow(2px 5px 10px ${COLORS.accent})`,
          }}
        />
      </div>
  </footer>
  );
}

export default Footer;