import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

class Chart extends Component {
  state = {
    food: 0,
    entertainment: 0,
    recreation: 0,
    other: 0
  };

  getFood = () => {
    return axios.get("/api/food").then(res => res.data);
  };

  componentDidMount() {
    this.getFood();
  }

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
      <div className="box box1">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "",
              fontSize: 30
            },
            legend: {
              display: true,
              text: "",
              position: "bottom"
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
