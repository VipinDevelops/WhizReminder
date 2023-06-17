import { useState } from 'react';
import './CreateReminder.css';
import DateTimePicker from 'react-datetime-picker';
// import ReactDOM from 'react-dom'

const CreateReminder = ({ modal, toggle, save }) => {
  const [reminderName, setReminderName] = useState('');
  const [reminderDescription, setReminderDescription] = useState('');
  const [remindAt, setRemindAt] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'task-name') {
      setReminderName(value);
    } else {
      setReminderDescription(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {
      reminderName: reminderName,
      reminderDescription: reminderDescription,
      remindAt: remindAt,

    };
    save(taskObj);
    setReminderName('');
    setReminderDescription('');
    setRemindAt();
    toggle();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setReminderName('');
    setReminderDescription('');
    setRemindAt();
    toggle();
  }

  return (
    modal && <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={handleCancel}
          >
            X
          </button>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="task-title">Reminder Name</label>
            <input
              type="text"
              className="form-control"
              value={reminderName}
              onChange={handleChange}
              name="task-name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="task-date">Reminder Description</label>
            <textarea
              className="form-control"
              rows="2"
              value={reminderDescription}
              onChange={handleChange}
              name="task-description"
            ></textarea>
          </div>
          <div
            className="form-group"
          >
            <label htmlFor="task-date">Reminder Date & Time</label>
            <DateTimePicker
              value={remindAt}
              onChange={setRemindAt}
              minDate={new Date()}
              minutePlaceholder="mm"
              hourPlaceholder="hh"
              dayPlaceholder="DD"
              monthPlaceholder="MM"
              yearAriaLabel="YYYY"
            />


          </div>

        </form>


        <div className="footer">
          <button
            onClick={handleCancel}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={handleSave}>Create</button>
        </div>
      </div>
    </div>);
};

export default CreateReminder;
