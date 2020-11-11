import React from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import StatsCard from "components/Cards/StatsCard.js";
import ProjectCard from "components/Cards/ProjectCard.js";
import jupyterLogo from "assets/img/cards/jupyterhub-logo.png"

function ProjectCards() {
  return (
    <>
      <div className="header pb-8 pt-5 pt-md-1">

        <Container fluid>
          <div className="header-body justify-content-md-center">
            {/* Card projects */}
            <Row className="pt-3">
              <Col></Col>
              <Col >
                <ProjectCard title="Dashboard" icon="fas fa-percent" iconbg="bg-info"/>
              </Col>
              
              <Col >
                <ProjectCard title="Collaborative Scientometry" link="https://datascore-jupyterhub.int.kit.edu" cardImage = {jupyterLogo}/>
              </Col>
              <Col></Col>
            </Row>
            {/* Card projects */}
            <Row className="pt-3">
              <Col></Col>
              <Col >
                <ProjectCard title="Semantics" icon="fas fa-percent" iconbg="bg-info"/>
              </Col>
              <Col >
                <ProjectCard title="Schema" icon="fas fa-percent" iconbg="bg-info"/>
              </Col>
              <Col >
                <ProjectCard title="Collaborative Scientometry" link="https://datascore-jupyterhub.int.kit.edu" cardImage = {jupyterLogo}/>
              </Col>
              <Col></Col>
            </Row>


          </div>
        </Container>
      </div>
    </>
  );
}

export default ProjectCards;
