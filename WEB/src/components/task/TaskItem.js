import React from "react";
import { useDispatch } from "react-redux";
import { deleteProjectTaskAsync } from "../../redux/taskSlice";

const TaskItem = ({ task, projectId }) => {
  const { id, description, name, estimate, disableDelete, createdAt } = task;
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteProjectTaskAsync({ projectId, id }));
  };

  return (
    <li className={`list-group-item`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center other-columns">{name}</span>
        <span className="d-flex align-items-center task-name-column">
          {description}
        </span>
        <span className="d-flex align-items-center other-columns">
          {createdAt}
        </span>
        <span className="d-flex align-items-center other-columns">
          {`${estimate}h`}
        </span>
        <button
          onClick={handleDeleteClick}
          className="btn btn-danger"
          disabled={disableDelete}
        >
          {disableDelete ? "Actions" : "Delete"}
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
