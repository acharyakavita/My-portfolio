import React, { Component } from "react";
import Layout from "../src/containers/Layout/Layout";
import About from './components/About/About';
import Projects from './components/Projects/Projects'
import Classes from "./App.css";
import { Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className={Classes.App}>
        <Layout>
          <Route path="/" exact component={About} />
          <Route path="/projects" component={Projects}/>
        </Layout>
      </div>
    );
  }
}

export default App;
