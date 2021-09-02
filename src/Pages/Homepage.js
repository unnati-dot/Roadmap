import React from "react"

import RoadmapCard from "./../Components/RoadmapCard"

function Homepage(){
  return(
    <main className="home">
      <section className="hero wrapper">
        <h1>Share your Learning Technique</h1>
        <p>Tell your journey and see what others have to face on there learning patch</p>
        <span>START TODAY</span>
      </section>
      <section>
        <h1>Take a peek on different Roadmaps</h1>
        <div className="roadmap-block  wrapper">
          <RoadmapCard>Frontend</RoadmapCard>
          <RoadmapCard>Backend</RoadmapCard>
          <RoadmapCard>React</RoadmapCard>
          <RoadmapCard>Devops</RoadmapCard>
          <RoadmapCard>Cyber Security</RoadmapCard>
          <RoadmapCard>Android</RoadmapCard>
        </div>
      </section>
    </main>
  )
}

export default Homepage
