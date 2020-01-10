import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

class Chart extends Component {
  state = {
    chartData: []
  };

  getFood = () => {
    return axios.get("/api/food").then(res => res.data);
  };

  getEntertainment = () => {
    return axios.get("/api/entertainment").then(res => res.data);
  };

  getRecreation = () => {
    return axios.get("/api/recreation").then(res => res.data);
  };

  getOther = () => {
    return axios.get("/api/other").then(res => res.data);
  };

  componentDidMount() {
    const promises = [
      this.getFood(),
      this.getEntertainment(),
      this.getRecreation(),
      this.getOther()
    ];

    Promise.all(promises).then(responses => {
      console.log(responses);
      this.setState({
        chartData: responses
      });
    });
  }

  render() {
    const chartConfig = {
      labels: ["Food", "Entertainment", "Recreation", "Other"],
      datasets: [
        {
          labal: "Pet-Friendly Places",
          data: this.state.chartData,
          backgroundColor: [
            "rbga(255,99, 132, 0.6)",
            "rbga(255,99, 132, 0.6)",
            "rbga(255,99, 132, 0.6)",
            "rbga(255,99, 132, 0.6)"
          ]
        }
      ]
    };

    return (
      <div className="box box1">
        <Bar
          data={chartConfig}
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
