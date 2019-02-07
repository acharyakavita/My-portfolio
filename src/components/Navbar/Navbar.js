import React from "react";
import Classes from "./Navbar.css";
import Hamburger from "./SideDrawer/Hamburger/Hamburger";
import NavigationItems from "../Navbar/NavigationItems/NavigationItems";

const navbar = props => {
  return (
    <header className={Classes.Navbar}>
      <Hamburger clicked={props.toggle} />
      <nav className={Classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default navbar;
