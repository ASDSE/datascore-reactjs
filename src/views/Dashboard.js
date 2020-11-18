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


const FooBarForm = () => {
  const [formData, updateFormData] = React.useState(initialFormData);
  const [getData, { loading, error, data }] = useLazyQuery(DATA_CITE_QUERY);
  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = () => {
    //e.preventDefault()
    console.log(formData);
    getData();
    // ... submit to API or something
  };

  return (
    <>
      <label>
        Username
        <input name="username" onChange={handleChange} />
      </label>
      <br />
      <label>
        Password
        <input name="password" onChange={handleChange} />
      </label>
      <br />
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
};


const initialFormData = Object.freeze({
  username: "",
  password: ""
});


function Dashboard(props){
  let input;
  const [getData, { loading, error, data }] = useLazyQuery(DATA_CITE_QUERY);
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
      <FooBarForm/>
      <NameForm/>
      <Button onClick={() => getData()}>
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
