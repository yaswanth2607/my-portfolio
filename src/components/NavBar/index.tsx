import { navbarTab } from "../../config";
import { NavbarTab, StyledIcons, TabContainer, TabLabel } from "./styled";

function NavBar() {
  return (
    <NavbarTab data-testid="navbar-tab">
      <TabContainer spaceBetween={32}>
        {navbarTab.textTab.map((tabElement, index) => (
          <TabLabel
            to={tabElement.path}
            key={`nav-link-${index}`}
            data-testid={`nav-link-${index}`}
          >
            {tabElement.label}
          </TabLabel>
        ))}
      </TabContainer>
      <TabContainer spaceBetween={16}>
        {navbarTab.iconTab.map((icon) => (
          <StyledIcons
            {...icon}
            key={`${icon.label}-icon`}
            alt={`${icon.label}-icon`}
            data-testid={`${icon.label}-icon`}
          />
        ))}
      </TabContainer>
    </NavbarTab>
  );
}

export default NavBar;
