import React from "react";
import { Card, CardDeck, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import StatsCard from "components/Cards/StatsCard.js";
import ProjectCard from "components/Cards/ProjectCard.js";
import jupyterLogo from "assets/img/cards/jupyterhub-logo.png"
import dashboard from "assets/img/cards/dashboard.png"

function ProjectCards() {
  return (
    <>
      <div className="header pb-8 pt-5 pt-md-1">

        <Container fluid>
          <div className="header-body">
            {/* Card projects */}
            <Row className="pt-3 justify-content-md-center">
              <CardDeck className="col-10 justify-content-md-center">
                <ProjectCard title="Dashboard" cardImage = {dashboard} text="The DataScore dashboard showcases metrics for scientific dataset management."  buttonTitle="DataScore Dashboard" maxWidth="40rem"/>


              <ProjectCard title="Collaborative Scientometry" link="https://datascore-jupyterhub.int.kit.edu" cardImage = {jupyterLogo} buttonTitle="JupyterHub" text="Scientometric analysis based on DataCites GraphQL API" maxWidth="40rem"/>

              </CardDeck>
            </Row>
            <Row className="pt-3 justify-content-md-center">
              <CardDeck className="col-10 justify-content-md-center">
                <ProjectCard title="Semantics" icon="fas fa-percent" iconbg="bg-info"  maxWidth="25rem"/>
                <ProjectCard title="Schema" icon="fas fa-percent" iconbg="bg-info"   maxWidth="25rem"/>
                <ProjectCard title="Collaborative Scientometry" link="https://datascore-jupyterhub.int.kit.edu" cardImage = {jupyterLogo}  maxWidth="25rem"/>
              </CardDeck>
            </Row>

            
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProjectCards;
