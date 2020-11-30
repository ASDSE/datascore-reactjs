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
          <h3>PID implementation</h3>
          <p>
            The DataCite Schema relies on <a href="https://www.forschungsdaten.info/praxis-kompakt/english-pages/glossary/#c403897" target="_blank" rel="noreferrer" className="font-weight-bold">Persistent Identifiers</a> (PIDs) for accurate cross referencing. We identified three (current) major PIDs which need to be implemented into a repository:
            <ol>
              <li>DOI</li>
                <ul>
                  <li>The <a  href="https://www.forschungsdaten.info/praxis-kompakt/english-pages/glossary/#c460412" target="_blank" rel="noreferrer" className="font-weight-bold">Digital Object Identifier</a> enables the persistent idendification of ditial documents in general. </li>
                  <li>In the virtue of the DataScore project the DOI is used to identify datasets, that are hosted by a repository.</li>
                  <li>The implementation is the final step and allowing the registration of DOIs at DataCite including meaningful meta data</li>
              </ul>
              <li>ORCID</li>
                <ul>
                  <li>The <a  href="https://orcid.org/" target="_blank" rel="noreferrer" className="font-weight-bold"> Open Researcher and Contributor ID</a> enables the idendification of researchers and students. </li>
                  <li>In the virtue of the DataScore project the ORCID is used to identify creators and contributors to the datasets.</li>
                  <li>ORCID can be easily implemented by manually providing the ORCID id and url.</li>
                  <li>On account of an enhanced user experience we recommend the use of the free public <a href="https://orcid.org/organizations/integrators/API" target="_blank" rel="noreferrer" className="font-weight-bold">ORCID API</a> for information retrieval. On account of the massive information to be retreived from ORCID we recommend a seperate request from the user.</li>
                </ul>
              <li>ROR</li>
                <ul>
                  <li>The <a  href="https://ror.org/" target="_blank" rel="noreferrer" className="font-weight-bold"> Research Organization Registry</a> enables the unique identification of every research organization in the world. </li>
                  <li>In the virtue of the DataScore project the ROR is used to identify the affiliations of the creators and contributors.</li>
                  <li>ROR can be easily implemented by manually providing the ROR id and url.</li>
                  <li>On account of an enhanced user experience we recommend the use of the free public <a href="https://ror.org/resources/" target="_blank" rel="noreferrer" className="font-weight-bold">ROR API</a> for information retrieval. This API works extrememly fast allowing for a live implementation.</li>
                </ul>
            </ol>
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
