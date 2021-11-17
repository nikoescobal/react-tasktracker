/* stylelint-disable */
/* eslint-disable */
import { FaTimes } from "react-icons/fa";

const Task = ({ task }) => {
  return (
    <div className='task'>
      <div className='task-align'>
        <h3>{task.text}</h3> <FaTimes />
      </div>

      <p>{task.day}</p>
    </div>
  );
};

export default Task;
