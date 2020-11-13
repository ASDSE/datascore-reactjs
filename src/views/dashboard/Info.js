import React from "react";
import { Card, CardDeck, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import StatsCard from "components/Cards/StatsCard.js";
import jupyterLogo from "assets/img/cards/jupyterhub-logo.png"
import dashboard from "assets/img/cards/dashboard.png"

function InfoCards() {
  return (
    <>
      <div className="header pb-8 pt-5 pt-md-1">

        <Container fluid>
          <div className="header-body">
            {/* Card projects */}
            <Row className="pt-3">
              <Col lg="0" xl="2">
              </Col>
              <Col lg="6" xl="4">
              <StatsCard title="Scientist" icon="fas fa-users" iconbg="bg-yellow" fullName="Nicolas Deutscher" />
              </Col>
              <Col lg="6" xl="4">
                <StatsCard title="Total Numbers" icon="fas fa-chart-bar" iconbg="bg-danger" fullName="Datasets" />
              </Col>
              </Row>

              <Row className="pt-3">

              </Row>



          </div>
        </Container>
      </div>
    </>
  );
}

export default InfoCards;
