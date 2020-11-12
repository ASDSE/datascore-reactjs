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

        <Card style={{ maxHeight: "30rem" }}>
          <CardImg
            alt="..."
            src={this.props.cardImage}
            top
            style={{ maxWidth: "30rem" , alignSelf: "center"}}
          />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>
              {this.props.text}
            </CardText>
            <Button
              color="primary"
              href={this.props.link}
              target = "_blank"
            >
              {this.props.buttonTitle}
            </Button>
          </CardBody>
        </Card>

    );
  }
}

export default ProjectCard;
