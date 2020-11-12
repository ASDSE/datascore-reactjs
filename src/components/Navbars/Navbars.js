import React from "react";
import {Route, Link } from "react-router-dom";
import logo from "assets/img/brand/DataScoreLogoWeb.png";


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
      <Link className="nav-link-icon" to={props.route} >
        {props.text}
      </Link>
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
                <NaviItem text="Home" route="/" />
                <NaviItem text="Projects" route="/projects"/>
                <NaviItem text="Dashboard" route="/dashboard" />
                <NaviItem text="JupyterHub" route="/jupyterhub" />
                <NaviItem text="Team" route="/team" />
                <NaviItem text="Contact" route="/contact" />

              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Navbars;
