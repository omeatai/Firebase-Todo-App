import React from "react";
import PropTypes from "prop-types";

export const Button = ({ height, width, colorON, colorOFF, toggle }) => {
  let btnTransform = "scale(1 1)";
  let color = colorON;
  if (!["ON", "on"].includes(toggle)) {
    btnTransform = "scale(-1 1)";
    color = colorOFF;
  }

  return (
    <svg
      stroke={color}
      fill={color}
      transform={btnTransform}
      strokeWidth="0"
      viewBox="0 0 512 512"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M368 112H144C64.6 112 0 176.6 0 256s64.6 144 144 144h224c79.4 0 144-64.6 144-144s-64.6-144-144-144zm0 256a112 112 0 11112-112 112.12 112.12 0 01-112 112z"></path>
    </svg>
  );
};

Button.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  colorON: PropTypes.string.isRequired,
  colorOFF: PropTypes.string.isRequired,
  toggle: PropTypes.string.isRequired,
};
