import React, { useState } from 'react'
import classnames from "classnames";
import {client, DCQuery, DATA_CITE_QUERY} from "components/GraphQL/GraphQLClient.js";
import { ApolloClient,ApolloProvider, InMemoryCache, gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';
// javascipt plugin for creating charts
import Chart from "chart.js";
import InfoCards from 'views/dashboard/Info'
import {BarChart, LineChart} from 'views/dashboard/Charts'
// react plugin used to create charts
import graphql2chartjs from 'graphql2chartjs'
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
  Row, Label,
  Col, Input, FormGroup
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1
} from "variables/charts.js";

let chartExample2 = {
  options: {
    scales: {
      yAxes: [{
               ticks: {
                   beginAtZero: true
               },
               display: true,
               scaleLabel: {
                 display: true,
                 labelString: 'Counts'
          }
           },
         ],
       xAxes: [{
                barPercentage: 1.0,
                categoryPercentage: 0.5,
                ticks: {
                    beginAtZero: true,
                    display: true,
                    mirror: true,
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90
                },
                display: true,
                labelPlacement: "inside",
                scaleLabel: {
                  display: true,
                  labelString: 'Datasets'
           }
            },
          ]
    },
    tooltips: {
      callbacks: {
        label: function(item, data) {
          var label = data.datasets[item.datasetIndex].label || " ";
          var yLabel = item.yLabel;
          var content = " ";
          if (data.datasets.length > 1) {
            content += label;
          }
          content = yLabel + " " + content;
          return content;
        }
      }
    }
  },
  data: {
    labels: ["July", "Augusr", "Sep", "Oct", "Nov", "Dec", "O", "O"],
    popups: ["some","text","here"],
    datasets: [
      {
        label: "Views",
        data: [1],
        maxBarThickness: 20,
        backgroundColor: ['#2dce89']

      },
      {
        label: "Downloads",
        data: [2],
        maxBarThickness: 20,
        backgroundColor: ['#fb6340']
      },
      {
        label: "Citations",
        data: [2],
        maxBarThickness: 20,
        backgroundColor: ['#5e72e4']
      }
    ]
  }
};


function updateGraphData(data){
  let newData = Object.assign(chartExample2)
  newData.data.labels = data.person.datasets.nodes.map(node => (node.id))
  newData.data.datasets[0].data = data.person.datasets.nodes.map(node => (node.viewCount))
  newData.data.datasets[0].backgroundColor = data.person.datasets.nodes.map(node => '#2dce89')
  newData.data.datasets[1].data = data.person.datasets.nodes.map(node => (node.downloadCount))
  newData.data.datasets[1].backgroundColor = data.person.datasets.nodes.map(node => '#fb6340')
  newData.data.datasets[2].data = data.person.datasets.nodes.map(node => (node.citations.totalCount))
  newData.data.datasets[2].backgroundColor = data.person.datasets.nodes.map(node => '#5e72e4')
  return newData
}


function Dashboard(props){
  let input;
  const [orcid, setOrcid] = useState("https://orcid.org/0000-0002-2906-2577")
  const [getData, { loading, error, data, client }] = useLazyQuery(DATA_CITE_QUERY, { errorPolicy: 'all',
   });


  return (

    <Container fluid>
      <h1><i className="fas fa-chart-line"></i> Dashboard</h1>
        {error && <p>{error.message}</p>}
        {loading && <p>Loading...</p>}
        <FormGroup>
          <Row>
            <Col md="9">
              <Input
                type="text"
                onChange={event => setOrcid(event.target.value)}
                placeholder="Enter your ORCID URL e.g. https://orcid.org/0000-0002-2906-2577"
                />
            </Col>
            <Col md='3'>
              <Button onClick={() => getData({
                  variables: {orcid}
                })
              }>
              Load Datasets
            </Button>
            </Col>
          </Row>
          <p>Missing input will load a representative example. For any question please contact<a href="mailto: stephan.sinn@kit.edu"> Dr. Stephan Sinn </a></p>
        </FormGroup>
      <InfoCards Name={data ? data.person.name :"Nobody"} Orcid={data ? data.person.id : "0000"} Datasets={data ? data.person.datasets.nodes: []}/>
      <Row>
        <Col>
          <Bar data={data ? updateGraphData(data).data : chartExample2.data} options={chartExample2.options}/>
        </Col>

      </Row>

    </Container>
  )
}



export default Dashboard
