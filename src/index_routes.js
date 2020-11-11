import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import About from './about'
import Contact from './contact'
import NavbarTop from './navbarTop'
import Error404 from './error'

const routing = (
        <div>
          <h1>React Router Example</h1>
        <Router>
          <NavbarTop />
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Error404} />

          </Switch>
        </Router>
      </div>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);
