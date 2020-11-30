import React from 'react'
import { Container } from "reactstrap";
class Contact extends React.Component {
  render() {
    return (
      <Container fluid>
        <h1><i className="far fa-envelope"/> Contact</h1>
        <p>
          We are very happy for any contribution to the DataScore project.
        </p>
        <p>
          You very welcome to contribute to any of our application <emphasize>via</emphasize> GitHub <a href="https://github.com/ASDSE">ASDSE</a>.
        </p>
        <p>
          Also please feel free to contact us <emphasize>via</emphasize> E-Mail: <a href="mailto:frank.biedermann@kit.edu" className="font-weight-bold"> Dr. Frank Biedermann </a>
        </p>

      </Container >
    );
  }
}
export default Contact
