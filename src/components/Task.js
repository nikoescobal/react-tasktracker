/* stylelint-disable */
/* eslint-disable */
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onClick={() => onToggle(task.id)}
    >
      <div className='task-align'>
        <h3>{task.text}</h3>{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </div>

      <p>{task.day}</p>
    </div>
  );
};

export default Task;
