import { ApolloClient,ApolloProvider, InMemoryCache, gql, useQuery } from '@apollo/client';
import React from 'react';
import { render } from 'react-dom';


const client = new ApolloClient({
  uri: 'https://api.datacite.org/graphql',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query GetRates {
        person(id: "https://orcid.org/0000-0002-2906-2577") {
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
          publications {
            totalCount
            nodes {
              id
              relatedIdentifiers {
                relatedIdentifier
              }
            }
          }
        }
      }
    `
  })
  .then(result => console.log(result));

  const EXCHANGE_RATES = gql`
    query GetExchangeRates {
      person(id: "https://orcid.org/0000-0002-2906-2577") {
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
        publications {
          totalCount
          nodes {
            id
            relatedIdentifiers {
              relatedIdentifier
            }
          }
        }
      }
    }
  `;

  function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

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
      <p> data.person.datasets.nodes[0].id</p>
    </div>
    </div>
  );
}


  function App() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>My first Apollo app 🚀</h2>
          <ExchangeRates/>
        </div>
      </ApolloProvider>
    );
  }


  render(<App />, document.getElementById('root'));
