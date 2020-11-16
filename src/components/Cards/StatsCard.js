import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function StatsCard(props) {
  return (
    <Card className="card-stats mb-4 mb-xl-0">
      <CardBody>
        <Row>
          <div className="col">
            <CardTitle
              tag="h5"
              className="text-uppercase text-muted mb-0"
            >
              {props.title}
            </CardTitle>
            <span className="h2 font-weight-bold mb-0">
              {props.fullName}
            </span>
          </div>
          <Col className="col-auto">
            <div className={`icon icon-shape ${props.iconbg} text-white rounded-circle shadow`}>
              <i className={props.icon} />
            </div>
          </Col>
        </Row>
        <p className="mt-3 mb-0 text-muted text-sm">
          <span className="text-success mr-2">
            <i className="fa fa-arrow-up" /> ORCID
          </span>{" "}
          <span className="text-nowrap">0000-0000-0000-0000</span>
        </p>
      </CardBody>
    </Card>
  );
}

export default StatsCard;