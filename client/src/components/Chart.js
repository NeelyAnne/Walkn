import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Food", "Entertainment", "Recreation", "Other"],
        datasets: [
          {
            labal: "Pet-Friendly Places",
            data: [20, 40, 100, 50],
            backgroundColor: [
              "rbga(255,99, 132, 0.6)",
              "rbga(255,99, 132, 0.6)",
              "rbga(255,99, 132, 0.6)",
              "rbga(255,99, 132, 0.6)"
            ]
          }
        ]
      }
    };
  }
  render() {
    return (
      <div className="box">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Neighborhoods in Atlanta",
              fontSize: 30
            },
            legend: {
              display: true,
              text: "Number of Pet Friendly Places",
              position: "bottom"
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
