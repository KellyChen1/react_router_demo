import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink
} from "react-router-dom";
import "../index.css";
const PrimaryHeader = () => {
  return (
    <Router>
      <header className="primary-header">
        <ul>
          <li>
            <NavLink to="/app" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/users" exact activeStyle={{color:'green'}}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/app/products"
              exact
              activeStyle={{
                color: "red"
              }}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </header>
    </Router>
  );
};

export default PrimaryHeader;
