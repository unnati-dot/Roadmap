import React from "react"
import {Link} from "react-router-dom"
import "./Header.css"
import {useHistory} from "react-router-dom"

export default function Header(){
const [value,setValue] = React.useState(0);
  const history= useHistory();

React.useEffect(()=>{
if(value===1 || value==0){
  history.push("/");
}else if(value===2){
  history.push("/signup")
}else if(value===3){
  history.push("/login");
}

},[value,history])

  return (
    <div className="header">
<div>
    <p  className="head2" >
Roadmaps
</p>
</div>
    <div className="links">
    
    
     <span onClick={()=>{setValue(1)}}>Home

     </span>
     <span onClick={()=>{setValue(2)}}>SignUp

     </span>
     <span onClick={()=>{setValue(3)}}>Login

     </span>
     <span>ContactUs

     </span>
</div>      
    
    </div>
  )
}
