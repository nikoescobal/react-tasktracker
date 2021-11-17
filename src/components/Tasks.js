/* stylelint-disable */
/* eslint-disable */

const tasks = [
  {
    id: 1,
    text: "Walk the dog",
    day: "Nov 18 at 4:00pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Eat some chocolate",
    day: "Nov 19 at 2:00pm",
    reminder: true,
  },
  {
    id: 3,
    text: "Buy cereal",
    day: "Nov 21 at 1:00pm",
    reminder: false,
  },
];

const Tasks = () => (
  <>
    {tasks.map((task) => (
      <h3 className='task'>{task.text}</h3>
    ))}
  </>
);

export default Tasks;
