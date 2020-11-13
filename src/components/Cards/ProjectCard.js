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
import {Link} from 'react-router-dom';
class ProjectCard extends React.Component {
  render() {
    return (

        <Card style={{ maxHeight: "30rem", maxWidth:this.props.maxWidth }}>
          <CardImg
            className={this.props.imgClass}
            alt="..."
            src={this.props.cardImage}
            top
            style={{
              maxHeight: "20rem" ,
              maxWidth:this.props.maxWidth,
              height: "auto",
              width: "auto",
              alignSelf: "center"

            }}
          />
        <CardBody className="flex-column d-flex">
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>
              {this.props.text}
            </CardText>
            <Link to={this.props.link}>
              <Button
                className="mt-auto"
                color={this.props.buttonColor}
                target = "_blank"
              >
                {this.props.buttonTitle}
              </Button>
            </Link>
          </CardBody>
        </Card>

    );
  }
}

export default ProjectCard;
