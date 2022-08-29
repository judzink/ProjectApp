import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProjectTaskAsync } from "../../redux/taskSlice";

const AddTaskForm = ({ projectId }) => {
  const [value, setValue] = useState({
    estimate: 0,
    name: "",
    description: "",
  });
  const dispatch = useDispatch();

  const onNameChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (value.name && value.description && value.estimate) {
      dispatch(
        addProjectTaskAsync({
          projectId: projectId,
          ...value,
        })
      );
    }
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        name="name"
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add task name..."
        value={value.name}
        onChange={(event) => onNameChange(event)}
      ></input>

      <label className="sr-only">Description</label>
      <input
        name="description"
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add task description ..."
        value={value.description}
        onChange={(event) => onNameChange(event)}
      ></input>

      <label className="sr-only">Estimate</label>
      <input
        name="estimate"
        type="number"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add task estimate ..."
        value={value.value}
        onChange={(event) => onNameChange(event)}
      ></input>

      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};

export default AddTaskForm;
