import React from "react";
import { Card, CardDeck, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import StatsCard from "components/Cards/StatsCard.js";
import {TeamCard} from "components/Cards/ProjectCard.js";
import jupyterLogo from "assets/img/cards/jupyterhub-logo.png"
import dashboard from "assets/img/cards/dashboard.png"
import nicole_jung from "assets/img/cards/supporters/nicole_jung.jpg"
import isabella_peters from "assets/img/cards/supporters/isabella_peters.jpg"
import felix_bach from "assets/img/cards/supporters/felix_bach.png"

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
                <CardDeck className="col-10 justify-content-md-center">
                  <TeamCard title="Prof. Dr. Isabella Peters" text="Leibniz Information Centre for Economics" buttonTitle="ZBW" link="http://zbw.eu/de/forschung/web-science/isabella-peters/" maxWidth="20rem" cardImage={isabella_peters} imgClass="black_white_img" buttonColor="primary" />
                  <TeamCard title="Dr. Nicole Jung" text="Karlsruhe Institute of Technology" buttonTitle="KIT" link="https://www.ioc.kit.edu/braese/21_110.php" maxWidth="20rem" cardImage={nicole_jung} imgClass="black_white_img" buttonColor="primary" />
                  <TeamCard title="Felix Bach" text="Steinbuch Centre for Computing" buttonTitle="SCC" link="https://www.scc.kit.edu/en/staff/felix.bach.php" maxWidth="20rem" cardImage={felix_bach} imgClass="black_white_img" buttonColor="primary" />
                </CardDeck>
              </Row>


            </div>
          </Container>
        </div>
      </>
    );
  }
}


export default AdvisoryBoard
