import React from 'react'
import { Container } from "reactstrap";
class About extends React.Component {
  render() {
    return (
      <Container fluid>
        <h1> <i className="fas fa-project-diagram" /> DataScore Project Description</h1>
          <p>
            The DataScore as a project of the <a className="font-weight-bold" href="https://www.forschungsdaten.info/praxis-kompakt/english-pages/glossary/#c403896" target="_blank">Research Data Management (RDM)</a> engagement pursues the realizations of the <a className="font-weight-bold" href="https://sfdora.org/" target="_blank">San Francisco Declaration of Research Assessment</a> (DORA).
          </p>
          <p>
            DataScore aims on the analysis of the additional effort necessary for decent reasech data management. Therefore, Datasets stored with <a className="font-weight-bold" href="https://www.forschungsdaten.info/praxis-kompakt/english-pages/glossary/#c403989" target="_blank">meta data</a> on online repository are the central pivot of DataScore's metrics. In order to aquire analysable dataset metrics, DataScore strives to provide "How to" and "Best Practice" guides for repository operators.
          </p>
          <p>
            As a project of the Karlsruhe Institute of Technology being the University of the Helmholtz Research Society, DataScore aspires to provide also recommendations for education and graduation processes. Please view the project's site for details.
          </p>
      </Container>
    );
  }
}
export default About
