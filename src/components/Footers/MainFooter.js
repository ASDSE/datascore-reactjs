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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import LogoKIT from "assets/img/brand/LogoKIT.svg";
import {Link}  from 'react-router-dom'
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © 2020{" "}
              <a
                className="font-weight-bold ml-1"
                href="https://kit.edu"
                rel="noopener noreferrer"
                target="_blank"
              >
                Karlsruhe Institute of Technology
              </a>
            </div>
          </Col>

          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">
              <NavItem  className="pl-2 pt-1">
                <Link to="/disclaimer" >
                  Disclaimer
                </Link>
              </NavItem>

              <NavItem className="pl-2 pt-1">
                <Link to="/about" >
                  About
                </Link>
              </NavItem>
              <NavItem className="pl-2">

                <img
                  alt="..."
                  src={LogoKIT}
                  height='50'
                />

              </NavItem>

            </Nav>
          </Col>

        </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
