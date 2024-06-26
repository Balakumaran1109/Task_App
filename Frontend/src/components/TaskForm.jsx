import React from "react";

const TaskForm = ({
  createTask,
  name,
  handleInputChange,
  isEditing,
  updateTask,
}) => {
  return (
    <form className="task-form" onSubmit={isEditing ? updateTask : createTask}>
      <input
        type="text"
        placeholder="Add a task"
        name="name"
        value={name}
        onChange={handleInputChange}
      ></input>
      <button type="submit">{isEditing ? "Edit" : "Add"}</button>
    </form>
  );
};

export default TaskForm;
