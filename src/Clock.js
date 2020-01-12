import React from "react";
import { connect } from "react-redux";

import { increaseHour, increaseMinute } from "./actions";
import "./Clock.css";

const Clock = ({ hour, minute, increaseHour, increaseMinute }) => {
  return (
    <div className="clock">
      <div className="screen">
        <div className="digits">
          <p className="digit-font">{hour}</p>
        </div>
        <div>
          {" "}
          <p className="digit-font">:</p>
        </div>
        <div className="digits">
          <p className="digit-font">{minute}</p>
        </div>
      </div>
      <div className="controls">
        <button onClick={increaseHour} className="increment">
          <p className="button-font">+</p>
        </button>
        <button onClick={increaseMinute} className="increment">
          <p className="button-font">+</p>
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    hour: state.hour,
    minute: state.minute
  };
}

export default connect(mapStateToProps, { increaseHour, increaseMinute })(
  Clock
);
