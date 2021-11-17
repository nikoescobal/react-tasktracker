/* stylelint-disable */
/* eslint-disable */

import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task className='task' key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
