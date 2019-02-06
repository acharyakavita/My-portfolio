import React, { Component } from "react";
import Layout from "../src/containers/Layout/Layout";
import Home from './components/Home/Home';
import About from './components/About/About';
import Classes from "./App.css";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className={Classes.App}>
        <Layout>
          <Route path="/" exact component={Home} />
         <Route path="/about" component={About} />
         {/* <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />*/} 
        </Layout>
      </div>
    );
  }
}

export default App;
