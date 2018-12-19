import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
export default class ExclusiveRoute extends Component {
  render() {
    const UserAddPage = () => <div>UserAddPage</div>;
    const Homepage = () => <div>Homepage</div>;
    const UsersPage = () => <div>UsersPage</div>;
    return (
      <BrowserRouter>
        <div>
          <header>
            <p>
              <Link to="/">Homepage</Link>
            </p>
            <p>
              <Link to="/users">Users</Link>
            </p>

            <p>
              <Link to="/users/add">Add</Link>
            </p>
          </header>
          <main>
            {/* SWITCH */}
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/users/add" component={UserAddPage} />
              <Route path="/users" component={UsersPage} />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
