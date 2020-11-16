import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import { Card, CardBody } from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

class BarChart extends React.Component {
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <Card>
          <CardBody>
            <div className="chart">
              {/* Chart wrapper */}
              <Bar
                data={chartExample2.data}
                options={chartExample2.options}
              />
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}



class LineChart extends React.Component {
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <Card className="bg-default">
          <CardBody>
            <div className="chart">
              {/* Chart wrapper */}
              <Line
                data={chartExample1.data1}
                options={chartExample1.options}
                getDatasetAtEvent={e => console.log(e)}
              />
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}
export {LineChart, BarChart}
