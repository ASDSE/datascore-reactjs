import React from 'react'
import { Container } from "reactstrap";

class SemanticWeb extends React.Component {
  render() {
    return (
      <Container fluid>
        <h1><i className="fas fa-code-branch" /> Semantic Web and SPARQL</h1>
          <p>
            We demonstrate the implemenetation of an additional RDF layer following the ODB standard onto a PostgreSQL database in order to enable access with a SPARQL interface.
          </p>
          <p>
            For any questions please contact: <a href="mailto:tobias.kaefer@kit.edu">Dr. Tobias Käfer</a>
          </p>
      </Container>
    );
  }
}
export default SemanticWeb
