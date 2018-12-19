import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function RouteChildren() {
  return (
    <Router>
      <div>
        <MenuLink exact={true} to="/" label="Home" />
        <MenuLink to="/about" label="About" />
        <hr />
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}
function MenuLink({ exact, to, label }) {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match, history, location }) => {
        console.log(match, "match");
        console.log(history, "history");
        console.log(location, "location");
        return (
          <div className={match ? "active" : ""}>
            {match ? ">" : ""}
            <Link to={to}>{label}</Link>
          </div>
        );
      }}
    />
  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
