import React from "react";
import {Container, Row, Col } from "reactstrap";
import StatsCard, {PersonCard, DatasetCard} from "components/Cards/StatsCard.js";

function InfoCards(props) {
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
                <PersonCard title="Scientist" fullName={props.Name} orcid={props.Orcid} />
              </Col>
              <Col lg="6" xl="4">
                <DatasetCard title="Total Numbers" fullName="Datasets" datasets={props.Datasets}/>
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
