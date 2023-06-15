import { useState } from 'react';
import './CreateReminder.css';


const CreateReminder = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'task-name') {
      setTaskName(value);
    } else {
      setTaskDescription(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj['Name'] = taskName;
    taskObj['Description'] = taskDescription;
    save(taskObj);
    setTaskName('');
    setTaskDescription('');
    toggle();
  };

  return (modal && <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={toggle}
        >
          X
        </button>
      </div>
      {/* <div className="title">
        <h1>Are You Sure You Want to Continue?</h1>
      </div>
      <div className="body">
        <p>The next page looks amazing. Hope you want to go there!</p>
      </div> */}

      <form>
        <div className="form-group">
          <label htmlFor="task-title">Task Name</label>
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="task-name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="task-date">Task Description</label>
          <textarea
            className="form-control"
            rows="2"
            value={taskDescription}
            onChange={handleChange}
            name="task-description"
          ></textarea>
        </div>
        <div
        //  className="form-group"
        >
          <label htmlFor="task-date">Task Date</label>
          {/* <DateTimePicker
          // value={remindAt}
          // onChange={setRemindAt}
          // minDate={new Date()}
          // minutePlaceholder="mm"
          // hourPlaceholder="hh"
          // dayPlaceholder="DD"
          // monthPlaceholder="MM"
          // yearAriaLabel="YYYY"
          /> */}


        </div>

      </form>


      <div className="footer">
        <button
          onClick={toggle}
          id="cancelBtn"
        >
          Cancel
        </button>
        <button onClick={handleSave}>Create</button>
      </div>
    </div>
  </div>
  );
};

export default CreateReminder;
