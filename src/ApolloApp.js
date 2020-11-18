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
  query Dog ($orcid: String!) {
    dog(breed: $orcid) {
      id
      displayImage
    }
  }
`



const QueryApp = () => {
  const [orcidid, setBreed] = useState('dingo')
  const [getDog, {loading, data, error}] = useLazyQuery(GET_DOGGO, { errorPolicy: 'all' });

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
            variables: {orcid: orcidid}
          })
        }
      >
      Get a Dog</Button>
    </Fragment>
  )
}


function ApolloApp(){
  return (
    <ApolloProvider client={client}>
      <QueryApp/>
    </ApolloProvider>
  );
}

export default ApolloApp;
