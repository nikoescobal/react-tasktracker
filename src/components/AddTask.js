/* stylelint-disable */
/* eslint-disable */

const AddTask = () => {
  return (
    <form className='add-form'>
      <div className='form-control'>
        <label className='label'>Task</label>
        <input type='text' className='input' placeholder='Add Task' />
      </div>
      <div className='form-control'>
        <label className='label'>Day & Time</label>
        <input type='text' className='input' placeholder='Add Day & Time' />
      </div>
      <div className='form-control'>
        <label className='label'>Reminder</label>
        <input type='checkbox' />
      </div>
      <input type='submit' value='Save Task' className='btn-submit' />
    </form>
  );
};

export default AddTask;
