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
  Col, Input
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

const GET_DOGGO = gql`
  query Dog ($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`


const BreeForm = () => {
  const [breed, setBreed] = useState('dingo')
  const [getDog, {loading, data}] = useLazyQuery(GET_DOGGO);

  if (loading) {
    return <h2> Loading </h2>;
  }

  return (
    <>
      {data && data.dog ? (
        <img
          alt="Cute Dog"
          src={data.dog.displayImage}
          style={{height: 500, width: 500}}
        />
      ) : null}
      <Input
        type="text"
        onChange={event => setBreed(event.target.value)}
        placeholder="Choose a dog"
        />
      <Button
        onClick={() =>
          getDog({
            variables: {breed}
          })
        }
      >
      Get a Dog</Button>
    </>
  )
}



function Dashboard(props){
  let input;
  const [orcid, setBreed] = useState("https://orcid.org/0000-0002-2906-2577")
  const [getData, { loading, error, data, client }] = useLazyQuery(DATA_CITE_QUERY, { errorPolicy: 'all' });
  if (loading) return (
    <Container fluid>
      <h1>Dashboard</h1>
      <p>Loading...</p>
    </Container>
    );
  if (error) return (
    <Container fluid>
      <h1>Dashboard</h1>
      <p>{error.message}

      </p>

    </Container>
    );
  return (

    <Container fluid>
      <h1>Dashboard</h1>
      <Button onClick={() => getData({
        variables: {orcid}
      })
      }>
        Load Datasets
      </Button>

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
