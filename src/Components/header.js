import React from "react"
import {Link} from "react-router-dom"

export default function Header(){
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Roadmaps</Link></li>
        <li><Link to="/sign-up">Sign-up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}
