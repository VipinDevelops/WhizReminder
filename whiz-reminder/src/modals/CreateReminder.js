import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Reminder</ModalHeader>
      <ModalBody>
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
              rows="5"
              value={taskDescription}
              onChange={handleChange}
              name="task-description"
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateReminder;
