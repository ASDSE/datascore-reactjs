import React, {Fragment, useState} from 'react'
import ReactDOM, { render } from "react-dom";

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

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useLazyQuery,
  gql
} from "@apollo/client";


const client = new ApolloClient({
  uri: "https://71z1g.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

const GET_DOGGO = gql`
  query Dog ($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`



const App = () => {
  const [breed, setBreed] = useState('dingo')
  const [getDog, {loading, data}] = useLazyQuery(GET_DOGGO);

  if (loading) {
    return <h2> Loading </h2>;
  }

  return (
    <Fragment>
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
    </Fragment>
  )
}


  ReactDOM.render(
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>,
    document.getElementById('root')
  );
