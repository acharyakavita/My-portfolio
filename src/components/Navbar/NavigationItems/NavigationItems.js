import React from "react";
import Classes from "./NavigationItems.css";
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => {
  return (
    <ul className={Classes.NavigationItems}>
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/projects">Projects</NavigationItem>
    </ul>
  );
};

export default navigationItems;
