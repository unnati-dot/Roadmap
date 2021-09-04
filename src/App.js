import React from "react"
import {Switch, Route} from "react-router-dom"
import Homepage from "./Pages/Homepage";
import Header from "./Components/header.js"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Newlogin from "./newloginusingsawo/Newlogin"
import "./styles.css";

export default function App() {
  require('dotenv').config()
  return (
    <div className="App">


      <Header />
      <Switch>
        <Route  path="/" component={Homepage} exact/>
        <Route path="/login" component={Newlogin}/>
        {/*<Route path="/login" component={Login}/>*/}
      </Switch>
    </div>
  );
}
