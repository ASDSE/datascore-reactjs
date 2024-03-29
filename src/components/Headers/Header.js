/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import StatsCard from "components/Cards/StatsCard.js";
import ProjectCard from "components/Cards/ProjectCard.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";

import jupyterLogo from "assets/img/cards/jupyterhub-logo.png"

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header  pb-8 pt-5 pt-md-1">
          <AdminNavbar/>
          <Container fluid>
            <div className="header-body">
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
              {/* Card stats */}
              <Row className="pt-3">
                <Col lg="6" xl="3">
                  <StatsCard title="Stats" icon="fas fa-chart-bar" iconbg="bg-danger"/>
                </Col>

                <Col lg="6" xl="3">
                  <StatsCard title="Sales" icon="fas fa-chart-pie" iconbg="bg-blue"/>
                </Col>
                <Col lg="6" xl="3">
                  <StatsCard title="New users"  icon="fas fa-users" iconbg="bg-yellow"/>
                </Col>
                <Col lg="6" xl="3">
                  <StatsCard title="Performance" icon="fas fa-percent" iconbg="bg-info"/>
                </Col>
              </Row>

            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
