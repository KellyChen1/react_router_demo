import React from 'react'
import {Route,BrowserRouter as Router} from "react-router-dom";

function Comments({match}){
   return(<div>UserId:{match.params.userId}</div>) 
}
function Setting ({match}){
    return(<div>UserId:{match.params.userId}</div>)
    
}

export default function MathPathUrl ({match}){
    // console.log(match)
    return(
    <Router>
        User Profile:
        <Route path={`${match.url}/comments`} component={Comments}></Route>
        <Route path={`${match.path}/settings`} component={Setting}></Route>
        {/* <div>match.url: {match.url}</div>
        <div>match.path: {match.path}</div> */}
    </Router>
    )
   
}
