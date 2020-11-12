import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/img/brand/logo196.png";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";


function NaviItem(props) {
  return (
    <NavItem>
      <NavLink
        className="nav-link-icon"
        href="/"
        onClick={e => e.preventDefault()}
      >

        {props.text}

      </NavLink>
    </NavItem>
  );
}





class Navbars extends React.Component {
  render() {
    return (
      <>
        <Navbar
          className="navbar-horizontal navbar-dark bg-default"
          expand="lg"
        >
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/"
            >
            <img
              alt="..."
              src={logo}
              width='100'
              height='100'
            />
            </Link>
            <button
              aria-controls="navbar-default"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-default"
              data-toggle="collapse"
              id="navbar-default"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-default">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={logo}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-default"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-default"
                      data-toggle="collapse"
                      id="navbar-default"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto" navbar>
                <NaviItem text="Home"/>
                <NaviItem text="Projects"/>
                <NaviItem text="Dashboard"/>
                <NaviItem text="JupyterHub"/>
                <NaviItem text="Team"/>
                <NaviItem text="Contact"/>

              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Navbars;
