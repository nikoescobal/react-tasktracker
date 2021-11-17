/* stylelint-disable */
/* eslint-disable */

import PropTypes from "prop-types";
import "../index.css";
import Button from "./Button";

const Header = ({ title }) => (
  <div className='container'>
    <div className='task-container'>
      <h1 className='text-3xl'> {title}</h1>
      <Button color='steelblue' text='Hello' />
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
