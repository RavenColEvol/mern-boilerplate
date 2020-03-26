import PropTypes from "prop-types";
import * as React from "react";

const Bar = ({ progress, animationDuration }) => (
  <div
    style={{
      background: "#29d",
      height: 2,

      marginLeft: `${(-1 + progress) * 100}%`,

      transition: `margin-left ${animationDuration}ms linear`,
      width: "100%",
      zIndex: 1031
    }}
  />
);

Bar.propTypes = {
  animationDuration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired
};

export default Bar;
