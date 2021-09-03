import React from "react"
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
        <h1>Take a peek on different Roadmaps</h1>
        <div className="roadmap-block">
          <RoadmapCard>Frontend</RoadmapCard>
          <RoadmapCard>Backend</RoadmapCard>
          <RoadmapCard>React</RoadmapCard>
          <RoadmapCard>Devops</RoadmapCard>
          <RoadmapCard>Cyber Security</RoadmapCard>
          <RoadmapCard>Android</RoadmapCard>
        </div>
      </div>
    </>
  )
}

export default Homepage
