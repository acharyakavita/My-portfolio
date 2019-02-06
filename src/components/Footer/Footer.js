import React from "react";
import Classes from "./Footer.css";

const footer = props => {
  return (
    <footer className={Classes.Footer}>
      <a
        href="https://www.linkedin.com/in/kavitha-acharya-60975637/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className={["fab", "fa-linkedin"].join(" ")} />
      </a>
      <a
        href="https://github.com/acharyakavita?tab=repositories"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className={["fab", "fa-github"].join(" ")} />
      </a>
      <a
        href="https://twitter.com/kavita_acharya"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className={["fab", "fa-twitter"].join(" ")} />
      </a>
      <a
        href="mailto:acharyakavita12@gmail"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className={["fas", "fa-at"].join(" ")} />
      </a>
    </footer>
  );
};
export default footer;
