import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./Components/Header.js"

import Homepage from "./Pages/Homepage";
import Roadmap from "./Pages/Roadmap";
import RoadmapDetail from "./Pages/RoadmapDetail";
import Login from "./Pages/Login"

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Homepage} exact/>
        <Route path="/signup" component={Login}/>
        <Route path="/login" component={Homepage}/>
        <Route exact path="/roadmap" component={Roadmap}/>
        <Route exact path="/roadmap/:topic" component={RoadmapDetail}/>
      </Switch>
    </div>
  );
}
