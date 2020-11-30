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
        {/*
        <Alert color="danger">
          This is not yet the final version of the project website, everything is constantly changing! No content here is yet a valid expression of our opinion or any scientific result.
        </Alert>
        */}
        <ProjectCards />
        <Team />
        <AdvisoryBoard />
      </Container>
    )
  }
}
export default App
