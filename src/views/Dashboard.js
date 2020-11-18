import React, { useState } from 'react'
import classnames from "classnames";
import {client, DCQuery, DATA_CITE_QUERY} from "components/GraphQL/GraphQLClient.js";
import { ApolloClient,ApolloProvider, InMemoryCache, gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';
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
  Col, Input, FormGroup
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";







function Dashboard(props){
  let input;
  const [orcid, setOrcid] = useState("https://orcid.org/0000-0002-2906-2577")
  const [getData, { loading, error, data, client }] = useLazyQuery(DATA_CITE_QUERY, { errorPolicy: 'all' });


  return (

    <Container fluid>
      <h1>Dashboard</h1>
        {error && <p>{error.message}</p>}
        {loading && <p>Loading...</p>}
      <Col md="4">
        <FormGroup>
          <Input
            type="text"
            onChange={event => setOrcid(event.target.value)}
            placeholder="Enter our ORCID URL e.g. https://orcid.org/0000-0002-2906-2577"
            />
          <Button onClick={() => getData({
            variables: {orcid}
          })
          }>
            Load Datasets
          </Button>
        </FormGroup>
      </Col>
      <InfoCards Name={data ? data.person.name :"Nobody"} Orcid={data ? data.person.id : "0000"} />
      <Row>
        <Col>
          <BarChart />
        </Col>
        <Col>
          <LineChart />
        </Col>

      </Row>

    </Container>
  )
}



export default Dashboard
