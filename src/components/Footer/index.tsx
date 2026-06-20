import { footerTab } from "../../config";
import { FooterContainer, StyledImage } from "./styled";

function Footer() {
  return (
    <FooterContainer>
      <StyledImage {...footerTab.leftSection} />
      <StyledImage {...footerTab.rightSection} />
    </FooterContainer>
  );
}

export default Footer;
