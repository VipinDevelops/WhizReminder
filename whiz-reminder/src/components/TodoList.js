import classes from './TodoList.module.css';

export default function TodoList() {
  return (
    <>
      <div className={classes.header}>
        <h3 className="mt-3">WhizReminder ⏰ </h3>
        <button className="btn btn-primary mt-2">Create Task 🚀</button>
      </div>
    </>
  );
}
