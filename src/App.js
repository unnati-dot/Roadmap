import React from "react"
import {Switch, Route} from "react-router-dom"

import Homepage from "./Pages/Homepage";
import Header from "./Components/header"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/"><Homepage /></Route>
      </Switch>
    </div>
  );
}
