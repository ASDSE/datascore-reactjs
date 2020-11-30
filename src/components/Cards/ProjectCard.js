import React from "react";
import cardImage from "assets/img/theme/team-1-800x800.jpg"
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardFooter
} from "reactstrap";
import {Link} from 'react-router-dom';

class ProjectCard extends React.Component {
  render() {
    return (

        <Card style={{  maxWidth:this.props.maxWidth }}>
          <CardImg
            className={this.props.imgClass}
            alt="..."
            src={this.props.cardImage}
            top
            style={{
              maxHeight: "20rem" ,
              maxWidth: "100%",
              height: "auto",
              width: "auto",
              alignSelf: "center",
              padding: "1.5rem"
            }}
          />
        <CardBody className="flex-column d-flex">
            <CardTitle>{this.props.title}</CardTitle>
            <CardText style={{
                textAlign: "justify",
              }}>
              {this.props.text}
            </CardText>
            <Link to={this.props.link} className="mt-auto">
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

class TeamCard extends React.Component {
  render() {
    return (

        <Card style={{ maxWidth:this.props.maxWidth }}>
          <CardImg
            className={this.props.imgClass}
            alt="..."
            src={this.props.cardImage}
            top
            style={{
              maxHeight: "20rem" ,
              maxWidth: "100%",
              height: "auto",
              width: "auto",
              alignSelf: "center",
              padding: "1.5rem"
            }}
          />
        <CardBody className="flex-column d-flex">
            <CardTitle className="text-center">{this.props.title}</CardTitle>
            <CardText className="text-center">
              {this.props.text}
            </CardText>

              <Button
                className="mt-auto"
                color={this.props.buttonColor}
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

export {TeamCard};
export default ProjectCard;
