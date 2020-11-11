import React from "react";
import cardImage from "assets/img/theme/team-1-800x800.jpg"
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";

class ProjectCard extends React.Component {
  render() {
    return (

        <Card style={{ width: "18rem" }}>
          <CardImg
            alt="..."
            src={this.props.cardImage}
            top
          />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </CardText>
            <Button
              color="primary"
              href={this.props.link}
              target = "_blank"
            >
              Go somewhere
            </Button>
          </CardBody>
        </Card>
    
    );
  }
}

export default ProjectCard;
