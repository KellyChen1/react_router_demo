import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function Home() {
  return <div>Home</div>;
}
function About() {
  return <div>About</div>;
}
function Topic({ match, history }) {
  console.log(history);
  return <div>{`Which Topic: ${match.params.id}`}</div>;
}
function Topics({ match, location, history }) {
  console.log(match, "match");
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to={`${match.url}/componet`}>1</Link>
          </li>
          <li>
            <Link to={`${match.url}/lalla`}>2</Link>
          </li>
        </ul>
        <Route path="/topics/:id" component={Topic} />
        <Route
          path={match.url}
          exact
          render={() => {
            return <div>please pick up one</div>;
          }}
        >
          please pick up one
        </Route>
      </div>
    </Router>
  );
}
function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
}

function NestedRouter() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

export default NestedRouter;
