/* stylelint-disable */
/* eslint-disable */

import PropTypes from "prop-types";
import "../index";

const Header = ({ title }) => (
  <div className='container'>
    <div className='task-container'>
      <h1 className='text-3xl'> {title}</h1>
      <button className='btn'>Add</button>
    </div>
  </div>
);

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

// CSS in JS
// const headingStyle = {
//   backgroundColor: "red",
// };
