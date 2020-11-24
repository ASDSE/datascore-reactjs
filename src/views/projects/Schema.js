import React from 'react'
import { Container } from "reactstrap";

class Schema extends React.Component {
  render() {
    return (
      <Container fluid>
        <h1><i className="fas fa-database" /> Schema and SUSHI</h1>
        <h2>DataCite's Schema Implementation</h2>
          <p>
            In order to provide meaningful datasets on a database or repository appropriate meta data is needed and thus a decent schema is necessary.
            An implementation of DataCite's Schema is conducted as an example on the <a href="https://suprabank.org" target="_blank" rel="noreferrer" className="font-weight-bold">SupraBank</a> repository. This example is based on the Ruby on Rails framework and resulting guide will be presented here.
          </p>
          <p>
            For any questions please contact: <a href="mailto:stephan.sinn@kit.edu" >Dr. Stephan Sinn</a>
          </p>
        <h2>SUSHI Reports</h2>
          <p>
            Metrics on datasets need certain numbers such as download, view and citation counts. The latter is realized by persient identifiers (e.g. DOI) registered at DAtaCite <em>via</em> the above mentioned schema. Download and view counts should be reported regularly by the repository following the <a href="https://www.projectcounter.org/" target="_blank" rel="noreferrer" className="font-weight-bold">COUNTER Code of Practice for Research Data</a> in the
          <a href="https://github.com/datacite/sashimi/blob/master/lib/sushi_schema/sushi_usage_schema.json" target="_blank" rel="noreferrer" className="font-weight-bold"> SUSHI standard </a> <em>via</em>
            <a href="https://support.datacite.org/docs/usage-reports-api-guide" target="_blank" rel="noreferrer" className="font-weight-bold"> the DataCite Usage Reports API</a>.
              We will describe a way for a generic implementation by analyzing log files.
          </p>
          <p>
            For any questions please contact: <a href="mailto:michael.faerber@kit.edu" >Dr. Michael Färber</a> or
            <a href="mailto:stephan.sinn@kit.edu"> Dr. Stephan Sinn</a>.
          </p>
      </Container>
    );
  }
}
export default Schema
