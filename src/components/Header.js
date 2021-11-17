/* stylelint-disable */
/* eslint-disable */

import PropTypes from "prop-types";
import "../index.css";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className='heading'>
      <div className='sub-heading'>
        <h1 id='title' style={{ color: "navy" }} className='text-3xl'>
          {title}
        </h1>
        <Button color='darkturquoise' textColor='mintcream' text='Add' />
      </div>
    </header>
  );
};

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
