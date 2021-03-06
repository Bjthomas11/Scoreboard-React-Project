import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  };

  //   Part of react lifecycle
  componentDidMount() {
    // console.log("stopwatch mounted did mount");
    this.intervalID = setInterval(() => this.tickingTimer(), 100);
  }

  //   clears interval so it doesnt tick away and stack on menory
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tickingTimer = () => {
    // console.log("Ticking timer...");
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState(prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
      }));
    }
  };

  handleStopwatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
      console.log("starting...");
      this.setState({
        previousTime: Date.now()
      });
    }
  };

  handleReset = () => {
    this.setState({
      elapsedTime: 0
    });
  };

  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
