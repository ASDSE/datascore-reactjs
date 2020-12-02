import React from 'react'
import { Container } from "reactstrap";
import {Link} from 'react-router-dom';
class About extends React.Component {
  render() {
    return (
      <Container fluid>
        <h1> <i className="fas fa-project-diagram" /> DataScore Project Description</h1>
          <p>
            The DataScore, as a project of the <a className="font-weight-bold" href="https://www.forschungsdaten.info/praxis-kompakt/english-pages/glossary/#c403896" target="_blank" rel="noreferrer">Research Data Management (RDM)</a> engagement project, pursues the realizations of the <a className="font-weight-bold" href="https://sfdora.org/" target="_blank" rel="noreferrer">San Francisco Declaration of Research Assessment</a> (DORA).
          </p>

            <blockquote className="blockquote">
              <p className="mb-0">
                <em><strong>"For the purposes of research assessment, consider the value and impact of all research outputs (including datasets and software) in addition to research publications..."</strong> </em>
              </p>
              <footer className="blockquote-footer">
                DORA recommendations #3 and #5
              </footer>
            </blockquote>

            <blockquote className="blockquote">
              <p className="mb-0">
                <em><strong>"Be open and transparent by providing data and methods used to calculate all metrics..."</strong> </em>
              </p>
              <footer className="blockquote-footer">
                DORA recommendation #11
              </footer>
            </blockquote>
          <p>
            DataScore aims to provide transparent metrics summarizing the data and software track record of individual researchers. Therefore, datasets stored with <a className="font-weight-bold" href="https://www.forschungsdaten.info/praxis-kompakt/english-pages/glossary/#c403989" target="_blank" rel="noreferrer">metadata</a> in online repositories are the central pivot of DataScore's metrics. The metrics computed with our open tools and accessible <em>via</em> an intuitive web interface will contribute to valuing the additional effort necessary for decent research data management.

            To increase the data source of analysable dataset metrics, DataScore strives to provide "How to" and "Best Practice" guides for repository operators.

          </p>
          <p>
            As a project of the Karlsruhe Institute of Technology being the University in the Helmholtz Association, DataScore aspires to provide also recommendations for education and graduation processes.
          </p>
          <p>
            Please view the <Link to="/projects" className="font-weight-bold"> projects </Link> site for details.
          </p>
      </Container>
    );
  }
}
export default About
