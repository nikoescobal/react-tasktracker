/* stylelint-disable */
/* eslint-disable */

import PropTypes from "prop-types";

const Button = ({ color, text, textColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, color: textColor }}
      className='btn'
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "darkturquoise",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
