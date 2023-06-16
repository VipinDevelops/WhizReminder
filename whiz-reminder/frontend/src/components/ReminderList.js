import './ReminderList.css'
import React, { useEffect, useState } from 'react';
import CreateReminder from '../modals/CreateReminder';
import Card from './Card';
import Header from './Header'
import axios from 'axios';

const ReminderList = (props) => {
  const [modal, setModal] = useState(false);
  const [reminderList, setReminderList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/Getallreminder').then((res) => {
      console.log(res.data)
      setReminderList(res.data)
    });


  }, []);

  const deleteTask = (id) => {
    axios.delete('http://localhost:4000/api/deleteReminder', { data: { id: id } }).then((res) => {
      console.log(res.data)
      setReminderList(res.data)
    });
  }

  const toggle = () => setModal(!modal);

  const savetask = (task) => {
    console.log(task)
    axios.post('http://localhost:4000/api/createreminder', task).then((res) => {
      console.log(res.data)
      setReminderList(res.data)
    });
  };

  return (
    <>
      <Header setModal={setModal} />

      <CreateReminder modal={modal} toggle={toggle} save={savetask} />

      <div className="task-container">
        {reminderList && reminderList.map((task, index) => (
          <Card deleteTask={deleteTask} taskObj={task} index={index} key={task._id} id={task._id} />
        ))}
      </div>

    </>
  );
};

export default ReminderList;
