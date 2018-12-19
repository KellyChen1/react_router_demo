import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ParamsExample from "./route/router-param";
import RouteChildren from "./route/router_children";
import NestedRouter from "./route/nested_route";
import PrimaryHeader from "./route/navLink"
import MathPathUrl from "./route/match_path_url"
import WithRouterExample from './route/withRouter'
import WithRouterExample2 from './route/withRouter2'
import RenderVsComponent from './route/route_render_component'
// import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <RouteChildren/>
      
    );
  }
}

export default App;
