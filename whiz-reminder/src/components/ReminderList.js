import './ReminderList.css'
import React, { useEffect, useState } from 'react';
import CreateReminder from '../modals/CreateReminder';
import Card from './Card';

const ReminderList = (props) => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem('TaskList');

    if (arr) {
      let object = JSON.parse(arr);
      setTaskList(object);
    }
  }, []);

  const toggle = () => setModal(!modal);

  const savetask = (task) => {
    let tempList = taskList;
    tempList.push(task);

    localStorage.setItem('TaskList', JSON.stringify(tempList));

    setTaskList(tempList);
    setModal(false);
  };

  return (
    <>
      <div className="header">
        <h3 className="mt-3">WhizReminder ⏰ </h3>
        <button
          className="btn btn-primary mt-2"
          onClick={() => {
            setModal(true);
          }}
        >
          Create Task 🚀
        </button>
      </div>

      <div className="task-container">
        {taskList && taskList.map((task, index) => (
          <Card taskObj={task} index={index} />
        ))}
      </div>

      <CreateReminder modal={modal} toggle={toggle} save={savetask} />
    </>
  );
};

export default ReminderList;
