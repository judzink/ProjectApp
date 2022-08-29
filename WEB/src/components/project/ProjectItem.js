import React from "react";
import { useDispatch } from "react-redux";
import { deleteProjectAsync } from "../../redux/projectSlice";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ id, name, createdAt, disableDelete, tasks }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/tasks/${id}`, { state: { id, name, tasks } });
  }

  const handleDeleteClick = () => {
    dispatch(deleteProjectAsync({ id }));
  };

  return (
    <li className={`list-group-item`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center name-column">{name}</span>
        <span className="d-flex align-items-center other-columns">
          {createdAt}
        </span>
        <button
          onClick={handleDeleteClick}
          className="btn btn-danger"
          disabled={disableDelete}
        >
          {disableDelete ? "Actions" : "Delete"}
        </button>
        <button
          onClick={handleClick}
          className="btn btn-danger"
          disabled={disableDelete}
        >
          {`Tasks ${disableDelete ? "" : tasks.length}`}
        </button>
      </div>
    </li>
  );
};

export default ProjectItem;
