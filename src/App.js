/* stylelint-disable */
/* eslint-disable */

import "./App.css";
import Header from "./components/Header";
import "./index.css";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <div className=''>
      <Header />
      <div className='tasks-container'>
        <Tasks />
      </div>
    </div>
  );
};

export default App;
