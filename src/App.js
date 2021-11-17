/* stylelint-disable */
/* eslint-disable */

import "./App.css";
import Header from "./components/Header";
import "./index.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
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

  // Toggle Reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className=''>
      <Header />
      <AddTask />
      <div className='tasks-container'>
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "You currently have no tasks left. Great job!"
        )}
      </div>
    </div>
  );
};

export default App;
