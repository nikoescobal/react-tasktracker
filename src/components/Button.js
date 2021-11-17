/* stylelint-disable */
/* eslint-disable */

import PropTypes from "prop-types";

const Button = ({ color, text }) => {
  return (
    <button style={{ backgroundColor: color }} className='btn'>
      {text}
    </button>
  );
};

export default Button;
