import React from "react";
import Classes from "./Navbar.css";
import Hamburger from "./SideDrawer/Hamburger/Hamburger";
import NavigationItems from '../Navbar/NavigationItems/NavigationItems'

const navbar =props=>{

    return (
      <nav className={Classes.Navbar}>
        <Hamburger/>
        <NavigationItems/>
      </nav>
    );
}

export default navbar;
