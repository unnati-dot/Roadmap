import React from "react"
import {Switch, Route} from "react-router-dom"

import Homepage from "./Pages/Homepage";
import Header from "./Components/Header"
import Login from "./Pages/Login"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route  path="/" component={Homepage} exact/>
        <Route path="/signup" component={Login}/>
        <Route path="/login" component={Homepage}/>

      </Switch>
    </div>
  );
}
