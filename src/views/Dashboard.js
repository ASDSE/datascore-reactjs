import React from 'react'
import classnames from "classnames";
import {client, DCQuery} from "components/GraphQL/GraphQLClient.js";
// javascipt plugin for creating charts
import Chart from "chart.js";
import InfoCards from 'views/dashboard/Info'
import {BarChart, LineChart} from 'views/dashboard/Charts'
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

class Dashboard extends React.Component {
  render() {
    return (

      <Container fluid>
        <h1>Dashboard</h1>
        <InfoCards />
        <Row>
          <Col>
            <BarChart />
          </Col>
          <Col>
            <LineChart />
          </Col>

        </Row>
        <DCQuery/>
      </Container>
    )
  }
}
export default Dashboard
