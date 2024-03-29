  import React from 'react';
  import ReactDOM from 'react-dom';
  import {ApolloProvider } from '@apollo/client';
  import {client} from "components/GraphQL/GraphQLClient.js";
  import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
  import "assets/plugins/nucleo/css/nucleo.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import "assets/css/argon-dashboard-react.css";

  //import './index.css';
  import App from './App';
  import Error404 from './error'
  import About from 'views/About'
  import Contact from 'views/Contact'
  import Disclaimer from 'views/Disclaimer'
  import Team from 'views/Team'
  import Dashboard from 'views/Dashboard'
  import ProjectCards from "views/Projects";
  import JupyterHub from "views/JupyterHub";
  import Education from "views/projects/Education";
  import Schema from "views/projects/Schema";
  import SemanticWeb from "views/projects/SemanticWeb";
  import Navbars from "components/Navbars/Navbars.js";
  import ScrollToTop from "components/Navbars/ScrollToTop.js";
  import Footer from "components/Footers/MainFooter"

  import ApolloApp from "ApolloApp"



  const routing = (
          <div>
            <ApolloProvider client={client}>
              <Router>
                <Navbars />
                  <ScrollToTop>
                    <Switch>
                  <Route exact path="/" component={App} />
                  <Route exact path="/projects" component={ProjectCards} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/team" component={Team} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/disclaimer" component={Disclaimer} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/jupyterhub" component={JupyterHub} />
                  <Route exact path="/education" component={Education} />
                  <Route exact path="/semantic" component={SemanticWeb} />
                  <Route exact path="/schema" component={Schema} />
                  <Route component={Error404} />



                </Switch>
                <Footer/>
              </ScrollToTop>
            </Router>
            </ApolloProvider>
          </div>
  );






  ReactDOM.render(
    routing,
    //<ApolloApp/>,
    document.getElementById('root')
  );
