import React from 'react'
import classnames from "classnames";
import {client, DCQuery, DATA_CITE_QUERY} from "components/GraphQL/GraphQLClient.js";
import { ApolloClient,ApolloProvider, InMemoryCache, gql, useQuery } from '@apollo/client';
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

function Dashboard(props){
  const { loading, error, data } = useQuery(DATA_CITE_QUERY);
  if (loading) return (
    <Container fluid>
      <h1>Dashboard</h1>
      <p>Loading...</p>
    </Container>
    );
  if (error) return (
    <Container fluid>
      <h1>Dashboard</h1>
      <p>Error...</p>
    </Container>
    );
  return (

    <Container fluid>
      <h1>Dashboard</h1>
      <InfoCards Name={data.person.name} Orcid={data.person.id} />
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



export default Dashboard
