import React from 'react'
import { Container } from "reactstrap";
import Sample_Report from "assets/img/projects/sushi/Sample_Report.PNG"
import Approach from "assets/img/projects/sushi/Approach.PNG"


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
        <h3>Creation of reports following the COUNTER Code of Practice for Research Data</h3>
          <blockquote className="blockquote">
            <p className="mb-0">
              <em><strong>“The Code of Practice for Research Data Usage Metrics standardizes the generation and distribution of usage metrics for research data, enabling for the first time the consistent and credible reporting of research data usage”</strong> </em>
            </p>
            <footer className="blockquote-footer">
              The Code of Practice for Research Data Usage
            </footer>
          </blockquote>
          <p>
            It proposes a standardized format for research data, i.e. datasets-reports which help to compare research data and to analyze its reuse.

          </p>
          <p>
            We use the Github project <a href="https://github.com/CDLUC3/counter-processor" target="_blank" rel="noreferrer" className="font-weight-bold">Counter-processor</a> to create dataset reports following the COUNTER Code of Practice for Research Data. The expected format of logs is significantly different from typically available logs’ format. For this reason, existing logs are parsed, the required information is extracted, and new log files are created in the format that is compatible with the Counter-processor.  These newly created log files are then processed by the Counter-processor to create standardized research data reports.
          </p>
          <p>
            <img src={Approach}></img>
          </p>
          <p>
            Since the original logs are not edited but simply parsed, the remaining implementation concerning the normal logs do not need to be changed.
          </p>
          <h4>Log Parsing</h4>
          <p>
            All events that fulfill the following requirements are considered:
            <ul>
              <li>method=GET</li>
              <li>controller=DatasetsController</li>
              <li>action=show or action=download</li>
            </ul>
          </p>
          <p>
            The newly created log displays the events in a tab separated table, where each row represents an event and each column an event’s attribute, e.g. event time, client IP etc. Unavailable attributes as well as a dataset’s metadata are left blank. In the creation of new log files, it is ensured that one log file per day exists that captures all events of this day.
          </p>
          <h4>Report creation</h4>
          <p>
            For each month one report following the COUNTER Code of Practice for Research Data is created. A report thereby consists of a heading with metadata on the report and a body listing all datasets that were investigated or downloaded during the passed month and their corresponding statistics. The statistics consist of the attributes Total_Dataset_Investigations, Unique_Dataset_Investigations, Total_Dataset_Requests and Unique_Dataset_Requests. Total attributes count all events (except double-clicks) whereas for unique attributes all activities of one user are represented by one unique event. Investigation refers to all user activities on a dataset and requests are all user activities that retrieve or view the dataset itself. An example of a report can be seen below.
          </p>
          <img src={Sample_Report}></img>
          <p>
            For any questions please contact: <a href="mailto:michael.faerber@kit.edu" >Dr. Michael Färber</a> or
            <a href="mailto:stephan.sinn@kit.edu"> Dr. Stephan Sinn</a>.
          </p>
      </Container>
    );
  }
}
export default Schema
