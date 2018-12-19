import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function ParamsExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/netflex">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
        </ul>
        <Route path="/:id" component={Child} />
        <Route path="/order/:direction(asc|desc)" component={paramsRegx} />
      </div>
    </Router>
  );
}
function Child({ match }) {
  console.log(match, "match");
  return <div>ID:{match.params.id}</div>;
}
function paramsRegx({ match }) {
  console.log(match, "reg");
  return <div>direction: {match.params.direction}</div>;
}

export default ParamsExample;
