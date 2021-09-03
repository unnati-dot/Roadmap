import React from "react"
import "./roadmapcard.css"
function RoadmapCard(props){
  return(
    <div className="roadmap-card">
      <h3 className="roadmap-card__heading">{props.children}</h3>
      <p className="roadmap-card__paragraph">"Lorem ipsum dolor sit amet,
      consectetur adipiscinit, sed do eiusmod tempor” </p>
    </div>
  )
}

export default RoadmapCard
