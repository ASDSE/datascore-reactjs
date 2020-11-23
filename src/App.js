import logo from './logo.svg';
import './App.css';
import React from 'react'
import ProjectCards from "views/Projects";
import Team from "views/Team";
import AdvisoryBoard from "views/AdvisoryBoard";
import { Container, Row, Col, Alert } from "reactstrap";

class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Alert color="danger">
          This is not yet the final version of the project website, everything is constantly changing! No content here is yet a valid expression of our opinion or any scientific result.
        </Alert>
        <h1><i className="fas fa-chart-pie" />  Projects  </h1>
        <ProjectCards />
        <h1><i className="fas fa-users" />  Team </h1>
        <Team />
        <h1> <i className="fas fa-globe" />  Supporters</h1>
        <AdvisoryBoard />
      </Container>
    )
  }
}
export default App
