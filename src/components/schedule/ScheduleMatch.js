import React, { Component } from "react";
import axios from "axios";

class ScheduleMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
    };
    axios
      .get("http://cricapi.com/api/cricket", {
        params: {
          apikey: "njeVIg3Yo8VJRNdGJDPw1aS8Wy92",
        },
      })
      .then((res) => {
        this.setState({
          schedule: res.data.data,
        });
      });
  }

  async componentBillMount() {}

  render() {
    setTimeout(() => {
      console.log("render");
      console.log(this.state.schedule[0]);
    }, 1000);

    // const { scheduledata } = this.state.schedule;
    // for (var i = 0; i < this.state.schedule.length; i++) {
    //   console.log(this.state.schedule[i]);
    // }
    return (
      <React.Fragment>
        <div className="card">
          <h5 className="card-header">Featured</h5>

          {/* <p>{this.state.schedule[0]["title"]}</p> */}

          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ScheduleMatch;
