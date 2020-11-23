import React from "react";
import { Card, CardDeck, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import StatsCard from "components/Cards/StatsCard.js";
import ProjectCard from "components/Cards/ProjectCard.js";
import jupyterLogo from "assets/img/cards/projects/jupyter.png"
import dashboard from "assets/img/cards/projects/dashboard_16x9.png"
import semantic from "assets/img/cards/projects/semantic_4x3.png"
import aggregation from "assets/img/cards/projects/datacite_4x3.png"
import education from "assets/img/cards/projects/edu-1_4x3.png"

function ProjectCards() {
  return (
    <>
      <div className="header pb-8 pt-5 pt-md-1">

        <Container fluid>
          <div className="header-body">
            {/* Card projects */}
            <Row className="pt-3 justify-content-md-center">
              <CardDeck className="col-10 justify-content-md-center">
                <ProjectCard title="Dashboard" link="/dashboard" cardImage = {dashboard} text="The DataScore dashboard showcases metrics for scientific dataset management."  buttonTitle="DataScore Dashboard" maxWidth="30rem" buttonColor="success" />
                <ProjectCard title="Collaborative Scientometry" link="/jupyterhub" cardImage = {jupyterLogo} buttonTitle="JupyterHub" text="Scientometric analysis based on DataCites GraphQL API" maxWidth="30rem" buttonColor="success" />
              </CardDeck>
            </Row>
            <Row className="pt-3 justify-content-md-center">
              <CardDeck className="col-10 justify-content-md-center">
                <ProjectCard title="Semantic Web" cardImage = {semantic} text="Implementation of RDF Layers on a PostgreSQL database" maxWidth="25rem" buttonTitle="Read More" buttonColor="info" />
                <ProjectCard title="Data Aggregation" cardImage = {aggregation} text="DataCite's Dataset Schema as showcase implementation including SUSHI based DatasetReports" maxWidth="25rem" buttonTitle="Read More" buttonColor="info" />
                <ProjectCard title="Education and Training" cardImage = {education} text="Recommendations and best practice guides for academia and repository operators." maxWidth="25rem" buttonTitle="Read More" buttonColor="info" />
              </CardDeck>
            </Row>


          </div>
        </Container>
      </div>
    </>
  );
}

export default ProjectCards;
