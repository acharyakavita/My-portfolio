import React from "react";
import Classes from "./NavigationItems.css";
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => {
  return (
    <ul className={Classes.NavigationItems}>
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/about">About Me</NavigationItem>
      <NavigationItem link="/projects">Projects</NavigationItem>
      <NavigationItem link='/contact'>Contact Me</NavigationItem>
    </ul>
  );
};

export default navigationItems;
