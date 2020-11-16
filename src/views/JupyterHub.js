import React from 'react'
import { Container, Button } from "reactstrap";
class JupyterHub extends React.Component {
  render() {
    return (
      <Container fluid>

        <h1>DataScore's Jupyter Hub</h1>
            <p>The JupyterHub as a collaborative Jupyter Notebooks server is our development platform of different analysis of datasets metrics.</p>
            <p>The python programming lanuage as the core language of Jupyter Lab features versatile data science packages such as numpy and pandas. These packages alongside <a className="font-weight-bold" href="https://support.datacite.org/docs/datacite-graphql-api-guide" target="_blank">DataCite's GraphQL API</a> allows us to process real dataset metrics with theoretical models</p>
            <p>The resluting Jupyter Notebooks will be shared with the scientific comunity <em>via</em> <a className="font-weight-bold" href="https://github.com/ASDSE/datascore_public_jupnbs" target="_blank">GitHub</a> and <a className="font-weight-bold" href="https://mybinder.org/v2/gh/ASDSE/datascore_public_jupnbs/master?filepath=DataCite_Researcher.ipynb" target="_blank">Binder</a>.</p>
            <p>You are very welcome to use our JupyterHub. Please follow the ReadMe on our GitHub repository.</p>
            <Button
              className="mt-auto"
              color="default"
              href="https://datascore-jupyterhub.int.kit.edu/hub/login"
              target = "_blank"
            >
            JupyterHub
            </Button>

      </Container>
    );
  }
}
export default JupyterHub
