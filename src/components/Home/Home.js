import React from "react";
import Classes from "./Home.css";
import Button from '../../components/Button/Button';

const home =props=>{

    return (
      <div className={Classes.Home}>
        <div className={Classes.HomeText}>
          <h1>Hi, I am Kavitha Acharya</h1>
          <h3>I am a Front End Web Developer from Toronto.</h3>
          <Button>View My Projects <i className={['fas','fa-arrow-circle-right'].join(' ')}></i></Button>
        </div>
      </div>
    );
}

export default home;
