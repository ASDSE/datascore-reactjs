import logo from './logo.svg';
import './App.css';
import React from 'react'
import ProjectCards from "views/Projects";
import { Container, Row, Col } from "reactstrap";

class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <h1>Projects</h1>
        <ProjectCards />
        <h1>Team</h1>
        <ProjectCards />
        <h1>Advisory Board</h1>
        <ProjectCards />
      </Container>
    )
  }
}
export default App
