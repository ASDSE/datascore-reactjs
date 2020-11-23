import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Table, PopoverBody, UncontrolledPopover } from "reactstrap";

function StatsCard(props) {
  return (
    <Card className="card-stats mb-4 mb-xl-0">
      <CardBody>
        <Row>
          <div className="col">
            <CardTitle
              tag="h5"
              className="text-uppercase text-muted mb-0"
            >
              {props.title}
            </CardTitle>
            <span className="h2 font-weight-bold mb-0">
              {props.fullName}
            </span>
          </div>
          <Col className="col-auto">
            <div className={`icon icon-shape ${props.iconbg} text-white rounded-circle shadow`}>
              <i className={props.icon} />
            </div>
          </Col>
        </Row>
        <p className="mt-3 mb-0 text-muted text-sm">
          <span className="text-success mr-2">
            <i className="fa fa-arrow-up" /> ORCID
          </span>{" "}
          <span className="text-nowrap">{props.orcid}</span>
        </p>
      </CardBody>
    </Card>
  );
}

function PersonCard(props) {
  return (
    <Card className="card-stats mb-4 mb-xl-0">
      <CardBody>
        <Row>
          <div className="col">
            <CardTitle
              tag="h5"
              className="text-uppercase text-muted mb-0"
            >
              {props.title}
            </CardTitle>
            <span className="h2 font-weight-bold mb-0">
              {props.fullName}
            </span>
          </div>
          <Col className="col-auto">
            <div className={`icon icon-shape bg-yellow text-white rounded-circle shadow`}>
              <i className="fas fa-users" />
            </div>
          </Col>
        </Row>
        <p className="mt-3 mb-0 text-muted text-sm">
          <span className="text-success mr-2">
            <i className="fab fa-orcid" />
          </span>{" "}
          <a href={props.orcid} target="_blank" rel="noreferrer"><span className="text-nowrap">{props.orcid}</span></a>
        </p>
      </CardBody>
    </Card>
  );
}

function DatasetCard(props) {
  return (
    <Card className="card-stats mb-4 mb-xl-0">
      <CardBody>
        <Row>
          <div className="col">
            <CardTitle
              tag="h5"
              className="text-uppercase text-muted mb-0"
            >
              {props.title}
            </CardTitle>

          </div>
          <Col className="col-auto">
            <div className={`icon icon-shape bg-danger text-white rounded-circle shadow`}>
              <i className="fas fa-chart-bar" />
            </div>
          </Col>
        </Row>
        <p className="mt-3 mb-0 text-muted text-sm">

          <a href={props.orcid} target="_blank" rel="noreferrer"><span className="text-nowrap">{props.orcid}</span></a>
        </p>
        <div>
          <Table className="align-items-center" responsive>
            <thead>
              <th scope="col">Dataset</th>
              <th scope="col">Views</th>
              <th scope="col">Downloads</th>
              <th scope="col">Citations</th>
            </thead>
            <tbody>
              {props.datasets.map(node =>(
                <tr>
                  <td key={node.id}>
                    <span className="text-success mr-2">
                      <i className="fas fa-database" />
                    </span>
                    <a href={node.id} target="_blank" rel="noreferrer">
                      {node.id}
                    </a>
                  </td>
                  <td key={node.id}>{node.viewCount}</td>
                  <td key={node.id}>{node.downloadCount}</td>
                  <td key={node.id}>{node.citations.totalCount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

      </CardBody>
    </Card>
  );
}

function sumDownload(arr=[]){
  let total=0;
  for (var i in arr) {
    total += arr[i].downloadCount;
  };
  return total
}

function sumView(arr=[]){
  let total=0;
  for (var i in arr) {
    total += arr[i].viewCount;
  };
  return total
}

function sumCitation(arr=[]){
  let total=0;
  for (var i in arr) {
    total += arr[i].citations.totalCount;
  };
  return total
}



function SumCard(props) {
  return (
    <Card className="card-stats mb-4 mb-xl-0">
      <CardBody>
        <Row>
          <div className="col">
            <CardTitle
              tag="h5"
              className="text-uppercase text-muted mb-0"
            >
              {props.title}
            </CardTitle>
            <span className="h2 font-weight-bold mb-0">
              {props.fullName}
            </span>
          </div>
          <Col className="col-auto">
            <div className={`icon icon-shape bg-primary text-white rounded-circle shadow`}>
              <i className="fas fa-chart-pie"/>
            </div>
          </Col>
        </Row>
        <p className="mt-3 mb-0 text-muted text-sm">
          <span id="ViewToolTip" className="cursor-pointer pr-3">
          <span className="text-success mr-2">
            <i className="far fa-eye" />
          </span>
          <span className="text-nowrap">{sumView(props.datasets)}</span>
          </span>
          <UncontrolledPopover placement="top" target="ViewToolTip">
            <PopoverBody>
              <span className="text-nowrap">{sumView(props.datasets)}</span>
              <span className="pr-3 pl-2">Views</span>
            </PopoverBody>
          </UncontrolledPopover>

          <span id="DownloadToolTip" className="cursor-pointer pr-3">
          <span className="text-warning mr-2">
            <i className="fas fa-download" />
          </span>
          <span className="text-nowrap">{sumDownload(props.datasets)}</span>
          </span>
          <UncontrolledPopover placement="top" target="DownloadToolTip">
            <PopoverBody>
              <span className="text-nowrap">{sumDownload(props.datasets)}</span>
              <span className="pr-3 pl-2">Downloads</span>
            </PopoverBody>
          </UncontrolledPopover>

          <span id="CitationToolTip" className="cursor-pointer pr-3">
          <span className="text-primary mr-2">
            <i className="fas fa-quote-right" />
          </span>
          <span className="text-nowrap">{sumCitation(props.datasets)}</span>
          </span>
          <UncontrolledPopover placement="top" target="CitationToolTip">
            <PopoverBody>
              <span className="text-nowrap">{sumCitation(props.datasets)}</span>
              <span className="pr-3 pl-2">Citations</span>
            </PopoverBody>
          </UncontrolledPopover>




        </p>
      </CardBody>
    </Card>
  );
}

export {PersonCard, DatasetCard, SumCard};
export default StatsCard;
