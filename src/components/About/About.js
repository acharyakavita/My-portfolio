import React from "react";
import Classes from "./About.css";
import img from '../../assets/Kavitha.jpg';
import vs from '../../assets/icons8-visual-studio-96.png';
import firebase from '../../assets/icons8-firebase-96.png';
import redux from '../../assets/Redux.png';
import jquery from '../../assets/icons8-jquery-filled-100.png';

const about =props=>{

    return (
      <div >
        <section className={Classes.About}>
        <img src={img} alt='pic of kavitha'/>
        <article>
            <h3>A Little About Me...</h3>
                <p>Hi, I'm Kavitha. I am a Front End web developer with a background in Computer Science Engineering.
                    I am passionate about coding and learning new things</p>
                    <p>I have learnt web development through nano degree program from  <a href="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001" rel="noopener noreferrer" 
                    target='_blank' style={{textDecoration:'none', color:'brown'}}>Udacity</a>. The course curriculum is created in collaboration with Google, AT&T and GitHub. 
                    <br/>I have also learnt modern Javascript framework React & Redux through Udemy courses.
                    In my spare time, I enjoy travelling, reading and cooking, to name a few.</p>
                <h3>Before becoming a Web Developer...</h3>
                <p>I was working as a Mainframe devloper in Accenture,Bangalore,India.<br/>
                I have over 6 years of IT industry experience.</p>
                <br/>
                <a href="https://drive.google.com/drive/folders/1U-PMlVAUJfFUr4J9WT0-QSgxMFzsxC9N" rel="noopener noreferrer" target="_blank">My Resume</a>
            </article>
        </section>
        <section className={Classes.Skills}>
            <h2>My Skills</h2>
            <article>
                <div><i className={["fab","fa-react"].join(' ')}></i><p>React</p></div>
                <div><img src={redux} alt="redux logo"/><p>Redux</p></div>
                <div><i className={["fab","fa-html5"].join(' ')}></i><p>HTML5</p></div>
                <div><i className={["fab","fa-css3-alt"].join(' ')}></i><p>CSS3</p></div>
                <div><i className={["fab","fa-js-square"].join(' ')}></i><p>JavaScript</p></div>
                <div><i className={["fab","fa-sass"].join(' ')}></i><p>Sass</p></div>
                <div><img src={jquery} alt="jquery logo"/><p>jQuery</p></div>
                <div><img src={firebase} alt="firebase logo"/><p>Firebase</p></div>
                <div><i className={["fab","fa-github"].join(' ')}></i><p>GitHub</p></div>
                <div><i className={["fab","fa-git-square"].join(' ')}></i><p>Git</p></div>
                <div><img src={vs} alt="Visual studio logo"/><p>Visual Studio</p></div>
            </article>
    
        </section>
        
      </div>
    );
}

export default about;
