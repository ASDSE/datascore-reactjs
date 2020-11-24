import React from 'react'
import { Container } from "reactstrap";

class Education extends React.Component {
  render() {
    return (
      <Container fluid>
        <h1><i className="fas fa-graduation-cap" /> Education and Training</h1>
          <p>
            The DataScore Project offers training for educating students at all stages. Furthermore, we offer education guidelines and recommendations for repository operators.
            There is more to come soon.
          </p>
          <p>
            For any questions please contact: <a href="mailto:manuel.tsotsalas@kit.edu">Dr. Manuel Tsotsalas</a> or
            <a href="mailto:axel.loewe@kit.edu"> Dr. Axel Loewe</a>.
          </p>
      </Container>
    );
  }
}
export default Education
