import React from "react";
import { Card, CardDeck, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import StatsCard from "components/Cards/StatsCard.js";
import {TeamCard} from "components/Cards/ProjectCard.js";
import jupyterLogo from "assets/img/cards/jupyterhub-logo.png"
import dashboard from "assets/img/cards/dashboard.png"
import stephan from "assets/img/cards/stephan_sinn.jpg"
import frank from "assets/img/cards/frank_biedermann.jpg"
import michael from "assets/img/cards/michael_faerber.png"
import tobias from "assets/img/cards/tobias_kaefer.gif"


function Team() {
  return (
    <>
      <div className="header pb-8 pt-5 pt-md-1">

        <Container fluid>
          <div className="header-body">
            {/* Cards team */}

            <Row className="pt-3 justify-content-md-center">
              <CardDeck className="col-10 justify-content-md-center">
                <TeamCard title="Dr. Stephan Sinn" buttonTitle="Institute INT" link="https://www.int.kit.edu/staff_4854.php#" maxWidth="20rem" cardImage={stephan} imgClass="black_white_img" buttonColor="primary" />
                <TeamCard title="Dr. Frank Biedermann" buttonTitle="Institute INT" link="https://www.int.kit.edu/staff_2034.php#" maxWidth="20rem"  cardImage={frank} imgClass="black_white_img" buttonColor="primary" />
                <TeamCard title="Dr. Tobias Käfer" buttonTitle="Institute AIFB" link="https://www.aifb.kit.edu/web/Tobias_K%C3%A4fer/en" maxWidth="20rem" cardImage={tobias} imgClass="black_white_img" buttonColor="primary" />
                <TeamCard title="Dr. Michael Färber" buttonTitle="Institute AIFB" link="https://www.aifb.kit.edu/web/Michael_F%C3%A4rber" maxWidth="20rem"  cardImage={michael} imgClass="black_white_img" buttonColor="primary" />
              </CardDeck>
            </Row>


          </div>
        </Container>
      </div>
    </>
  );
}


export default Team
