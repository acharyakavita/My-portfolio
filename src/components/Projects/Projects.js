import React from "react";
import Classes from "./Projects.css";
import Project from "./Project/Project";
import stock from "../../assets/st2.png";
import church from "../../assets/church.png";
import arcade from "../../assets/arcade.png";
import RGB from "../../assets/RGB.png";
import memory from "../../assets/memory.png";

const projects = props => {
  const projects = [
    {
      name: "Stock Ticker",
      description:
        "This responsive web application displays the stock data graphically by using Alpha vantage API call.It is hosted on Firebase",
      skills: 'React.js | JavaScript ES6 | HTML5 | CSS3 | Chart.js | Rest Api | Responsive',
      demo: "https://stock-ticker-48b87.firebaseapp.com/",
      github: "https://github.com/acharyakavita/stock-Ticker",
      img: stock,
      alt: "image of stock ticker app"
    },
    {
      name: "Toronto Chuch On The Rock Ministries",
      description:
        "This is a live responsive website created for a church in Toronto.I have used Verse of the day Api to display a new verse daily",
      skills: 'JavaScript ES6 | HTML5 | CSS3 | Ajax | Rest Api | Responsive',
      demo: "http://www.torontochurchontherock.com/",
      github:
        "https://github.com/acharyakavita/Toronto-Church-on-the-Rock-Ministries",
      img: church,
      alt: "image of toronto chuch website"
    },
    {
      name: "Arcade Game",
      description:
        "This project is a fun game to cross a river while being attacked by giant bugs.Additional points are gained on collecting precious jewels on the way",
      skills: 'JavaScript ES6 | HTML5 | CSS3 | Responsive',
      demo: "https://arcade-game-53075.firebaseapp.com/",
      github: "https://github.com/acharyakavita/Arcade-Game",
      img: arcade,
      alt: "image of arcade game app"
    },
    {
      name: "Memory Matching game",
      description:
        "This project is another fun game to match the same tiles by memorizing their position",
      skills: 'JavaScript | HTML5 | CSS3 | Responsive',
      demo: "https://memory-matching-game-2d317.firebaseapp.com/",
      github: "https://github.com/acharyakavita/Memory-matching-Game",
      img: memory,
      alt: "image of memory matching game"
    },
    {
      name: "RGB color matching game",
      description: "Match the given RGB color value with given set of colors",
      skills: 'JavaScript | HTML5 | CSS3',
      demo: "https://rgb-game-bc056.firebaseapp.com/",
      github: "https://github.com/acharyakavita/RGB-color-matching-game",
      img: RGB,
      alt: "image of RGB color app"
    }
  ];

  let left=false
 
  let projectArray = projects.map(project => {
      if (left){
        left=!left
        return <Project key={project.name} data={project} left={left}/>
      }
      else{
        left=!left
        return <Project key={project.name} data={project} left={left}/>
      }})


  return (
    <div className={Classes.Projects}>
      <h2>My Projects</h2>
      {projectArray}
    </div>
  );
};

export default projects;
