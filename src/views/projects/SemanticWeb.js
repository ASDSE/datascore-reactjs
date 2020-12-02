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
          <h2>Knowledge Graphs</h2>
          <p>
            Knowledge Graphs allow for the eased integration of the meta data from different data repositories to facilitate cross-repository data score calculation and increased interoperability with third-party analytics tools. We demonstrate a SPARQL layer, which provides an interface to an RDF view to the contents of a relational database of the SupraBank data repository, see Calvanese et al. (2017). We showcase the solution by plugging in the calculation of FAIR metrics, as developed by Wilkinson et al. (2018).

          </p>
          <p>
            Knowledge Graph interface to the SupraBank repository at KIT to achieve interoperability, eg. with NFDI and TIB.

          </p>
          <p>
            <cite>
              Mark D. Wilkinson, Susanna-Assunta Sansone, Erik Schultes, Peter Doorn, Luiz Olavo Bonino da Silva Santos & Michel Dumontier: "A design framework and exemplar metrics for FAIRness" Scientific Data 5 180118 (2018)
            </cite>
          </p>
          <p>
            <cite>
              Diego Calvanese, Benjamin Cogrel, Saraha Komla-Ebri, Roman Kontchakov, Davide Lanti, Martina Rezk, Mariano Rodriguez-Muro, Guohui Xiao: "Ontop: Answering SPARQL queries over relational databases" Semantic Web 8 3 (2017)
            </cite>
          </p>
          <p>
            For any questions please contact: <a href="mailto:tobias.kaefer@kit.edu">Dr. Tobias Käfer</a>
          </p>
      </Container>
    );
  }
}
export default SemanticWeb
