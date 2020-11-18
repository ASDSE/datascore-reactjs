import { ApolloClient,ApolloProvider, InMemoryCache, gql, useQuery, HttpLink, onError, ApolloLink   } from '@apollo/client';
import React from 'react';
import { render } from 'react-dom';




const client = new ApolloClient({
  uri: 'https://api.datacite.org/graphql',
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



const DATA_CITE_QUERY = gql`
    query person($orcid: ID!) {
        person(id: $orcid) {
          id
          name
          datasets {
            nodes {
              id
              downloadCount
              viewCount
              citations {
                totalCount
              }
            }
          }
        }


    }
  `;


  function DCQuery() {
  const { loading, error, data } = useQuery(DATA_CITE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
    <div key={data.person.name}>
      <p>
        {data.person.name}: {data.person.id}
      </p>
    </div>
    <div>
      {data.person.datasets.nodes.map(node => (
        <p key={node.id}> {node.id}</p>
      ))}
    </div>
    </div>
  );
}

export {client, DCQuery, DATA_CITE_QUERY};
