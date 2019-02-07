import React from "react";
import Classes from "./Project.css";
import Aux from "../../../hoc/Auxilary";
import ScrollAnimation from 'react-animate-on-scroll';

const project = props => {
    let project=null;
    if (props.left){
        project=(<ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOut" duration={2} animateOnce={true}>
        <div className={Classes.Project}>
            <div className={Classes.Data}>
              <h3>{props.data.name}</h3>
              <p>{props.data.description}</p>
              <p><strong>Skills Used : </strong>{props.data.skills}</p>
              <div className={Classes.Link}>
              <a href={props.data.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              <a href={props.data.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              </div>
            </div>
            <div className={Classes.Image}>
              <img src={props.data.img} alt={props.data.alt} />
            </div>
          </div>
          </ScrollAnimation>)
        }
    else {
        project=(
            <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOut" duration={2} animateOnce={true}>
            <div className={Classes.Project}>
            <div className={Classes.Image}>
              <img src={props.data.img} alt={props.data.alt} />
            </div>
            <div className={Classes.Data}>
              <h3>{props.data.name}</h3>
              <p>{props.data.description}</p>
              <p><strong>Skills Used : </strong>{props.data.skills}</p>
              <div className={Classes.Link}>
              <a href={props.data.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              <a href={props.data.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              </div>
            </div>
          </div>
          </ScrollAnimation>
        )
    }
  return (
      <Aux>{project}</Aux>
    
  );
};

export default project;
