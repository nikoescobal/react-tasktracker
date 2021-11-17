/* stylelint-disable */
/* eslint-disable */

import "./App.css";
import Header from "./components/Header";
import "./index.css";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
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
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className=''>
      <Header />
      <div className='tasks-container'>
        <Tasks tasks={tasks} onDelete={deleteTask} />
      </div>
    </div>
  );
};

export default App;
