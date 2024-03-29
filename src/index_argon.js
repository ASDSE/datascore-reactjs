/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/argon-dashboard-react.css";

import App from './App'
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import ProjectCards from "views/Projects.js";
import Navbars from "components/Navbars/Navbars.js";
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" />
      <Route path="/app" component={App}/>
      <Route exact path="/jupyterhub" render{() => (window.location = "https://datascore-jupyterhub.int.kit.edu")}
    </Switch>
  </Router>,
  document.getElementById("root")
);
