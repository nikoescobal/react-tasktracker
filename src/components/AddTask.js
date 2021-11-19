/* stylelint-disable */
/* eslint-disable */

import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }
    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label className='label'>Task</label>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='input'
          placeholder='Add Task'
        />
      </div>
      <div className='form-control'>
        <label className='label'>Day & Time</label>
        <input
          type='text'
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className='input'
          placeholder='Add Day & Time'
        />
      </div>
      <div className='form-control'>
        <div className='label-container'>
          <label className='label'>Reminder</label>
          <input
            type='checkbox'
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
      </div>
      <input type='submit' value='Save Task' className='btn-submit' />
    </form>
  );
};

export default AddTask;
