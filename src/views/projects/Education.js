import React from 'react'
import { Container } from "reactstrap";

class Education extends React.Component {
  render() {
    return (
      <Container fluid>
        <h1><i className="fas fa-graduation-cap" /> Education and Training</h1>
          <p>
            The DataScore Project offers guidelines and recommendations to stress the importance of research data management already in the graduate and post graduate programs.
          </p>
          <p>
            Primary recommendations:
            <ul>
              <li>
                Integrate RDM in the curriculum, for example in (laboratory) internships and field work
              </li>
              <li>
                Include RDM as a separate item in the doctoral agreements
              </li>
              <li>
                Integrate RDM in the assessment of bachelor, master and doctoral theses
              </li>
            </ul>
          </p>
          <p>
            Furthermore, we offer a set of recommendations and “best practice guides” for repository operators to enhance the analyzability of dataset metrics.
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
