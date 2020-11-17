import React, { useState } from 'react'
import classnames from "classnames";
import {client, DCQuery, DATA_CITE_QUERY, DATA_CITE_MUTATION} from "components/GraphQL/GraphQLClient.js";
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
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";



export function NameForm(props) {
  const [name, setName] = useState("");
  const [getData, { loading, error, data }] = useLazyQuery(DATA_CITE_QUERY);
  const handleSubmit = (evt) => {
      evt.preventDefault();
      getData();
      alert(`Submitting Name ${name}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}



function Dashboard(props){
  let input;
  const [getData, { loading, error, data }] = useLazyQuery(DATA_CITE_QUERY);
  const [getMutation, { mutdata }] = useMutation(DATA_CITE_MUTATION);
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
      <NameForm/>
      <Button onClick={() => getData()}>
        Load Datasets
      </Button>
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            getMutation({ variables: { type: input.value } });
            input.value = '';
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
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
