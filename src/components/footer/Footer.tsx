import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/helpers";
import { COLORS, FOOTER_HEIGHT } from "../../styles/theme";
import { Icon } from "../icon";
import { Text } from "../text";

type FooterLink = {
  svg: React.FC;
  url: string;
}

export type FooterProps = {
  links: FooterLink[];
};

const Footer: React.FC<FooterProps> = ({
  links
}) => {
  return (
  <StyeldFooter>
      <Text text={`© Maaz Makrod, ${new Date().getFullYear()}`} tagName="p" types={['p', 'bold']} color={COLORS.primary} margin="0" />
      <StyledFooterLinks>
        {
          links.map(link => (
            <Icon 
              SvgImage={link.svg}
              tag="a"
              url={link.url}
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
              target="_blank"
              svgProps={{
                style: {
                  width: 'inherit',
                  height: 'inherit',
                }
              }}
            />        
          ))
        }
      </StyledFooterLinks>
  </StyeldFooter>
  );
}

const StyledFooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const StyeldFooter = styled.footer`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  padding-top: 20px;
  padding-bottom: 10px;
  height: ${FOOTER_HEIGHT};

  width: 100%;
  max-width: 1600px;
  flex-grow: 1;
`;

export default Footer;