import React from "react";
import PropTypes from "prop-types";

export const ToggleLocal = ({ size }) => {
  return (
    <svg
      stroke="#000"
      fill="#000"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path>
    </svg>
  );
};

ToggleLocal.propTypes = {
  size: PropTypes.string.isRequired,
};
