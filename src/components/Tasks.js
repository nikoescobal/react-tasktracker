/* stylelint-disable */
/* eslint-disable */

import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task className='task' key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
