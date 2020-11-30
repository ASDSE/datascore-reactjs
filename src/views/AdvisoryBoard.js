import React from "react";
import { Card, CardDeck, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import StatsCard from "components/Cards/StatsCard.js";
import {TeamCard} from "components/Cards/ProjectCard.js";
import jupyterLogo from "assets/img/cards/jupyterhub-logo.png"
import dashboard from "assets/img/cards/dashboard.png"
import nicole_jung from "assets/img/cards/supporters/nicole_jung.jpg"

class AdvisoryBoard extends React.Component {
  render() {
    return (

      <>
        <div className="header pb-8 pt-5 pt-md-1">
          <Container fluid>
            <h1> <i className="fas fa-globe" />  Supporters</h1>
            <div className="header-body">
              {/* Cards team */}

              <Row className="pt-3 justify-content-md-center">
                <Col></Col>
                <TeamCard title="Dr. Nicole Jung" buttonTitle="Institute IOC" link="https://www.ioc.kit.edu/braese/21_110.php" maxWidth="20rem" cardImage={nicole_jung} imgClass="black_white_img" buttonColor="primary" />
                <Col></Col>
                <Col></Col>
                <Col></Col>
              </Row>


            </div>
          </Container>
        </div>
      </>
    );
  }
}


export default AdvisoryBoard
