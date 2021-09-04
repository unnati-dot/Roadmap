import React from "react"
import {useParams} from "react-router-dom"

function RoadmapDetail(){
  const {topic} = useParams()

  return(
    <h1>{topic}</h1>
  )
}

export default  RoadmapDetail

/*
this will fetch data from backend and display roadmap of particular topic 
*/
