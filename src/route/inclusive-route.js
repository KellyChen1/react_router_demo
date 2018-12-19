import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
export default class InclusiveRoute extends Component {
  render() {
    const UsersMenu = () => <div>Users</div>;
    const Homepage = () => <div>Homepage</div>;
    const Index = () => <div>Index</div>;
    return (
      <BrowserRouter>
        <div>
          <header>
            <p>Our React Router 4 App</p>
              <p>
                <Link to="/users">Users</Link>
              </p>
            <p>
              <Link to="/">Homepage</Link>
            </p>
            <p>
              <Link to="/index">Index</Link>
            </p>
          </header>
          <main>
            <Route path="/users" component={UsersMenu} />
            <Route path="/" component={Homepage} />
            <Route path="/index" component={Index} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
