import React from "react"
import {Link} from "react-router-dom"

import "./homepage.css"
import RoadmapCard from "./../Components/RoadmapCard"

function Homepage(){
  return(
    <>
      <section className="hero wrapper">
        <heading>Share your Learning Technique</heading>
        <p>Tell your journey and see what others have to face on there learning patch</p>
        <span>START TODAY</span>
        <div className="buttons">
          <button>Read</button>
          <button>Create</button>
        </div>
      </section>
      <div className="about wrapper" id="#roadmap">
        <h1>Take a peek on different <Link to="/roadmap" >Roadmaps</Link></h1>
        <div className="roadmap-block">
          <Link to="/roadmap/frontend"><RoadmapCard>Frontend</RoadmapCard></Link>
          <Link to="/roadmap/backend"><RoadmapCard>Backend</RoadmapCard></Link>
          <Link to="/roadmap/react"><RoadmapCard>React</RoadmapCard></Link>
          <Link to="/roadmap/devops"><RoadmapCard>Devops</RoadmapCard></Link>
          <Link to="/roadmap/cyber-security"><RoadmapCard>Cyber Security</RoadmapCard></Link>
          <Link to="/roadmap/android"><RoadmapCard>Android</RoadmapCard></Link>
        </div>
      </div>
    </>
  )
}

export default Homepage
