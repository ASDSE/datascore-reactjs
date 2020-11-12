import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch , Redirect} from 'react-router-dom'
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/argon-dashboard-react.css";

//import './index.css';
import App from './App';
import About from './about'
import Contact from './contact'
import NavbarTop from './navbarTop'
import Error404 from './error'
import ProjectCards from "views/Projects";
import Navbars from "components/Navbars/Navbars.js";
import Footer from "components/Footers/MainFooter"
const routing = (
        <div>
        <Router>
          <Navbars />
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/projects" component={ProjectCards} />
            <Route exact path="/contact" component={Contact} />

            <Route exact path="/jupyterhub" component={() => {(window.location.href = "https://datascore-jupyterhub.int.kit.edu"); return null}} />
            <Route component={Error404} />

          </Switch>
          <Footer/>
        </Router>
      </div>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);
