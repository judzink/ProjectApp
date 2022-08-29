import React, { useEffect } from "react";
import AddTaskForm from "../components/task/AddTaskForm";
import TaskList from "../components/task/TaskList";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProjectTasksAsync } from "../redux/taskSlice";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const { state } = useLocation();
  const { id, name } = state;
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const tasks = useSelector((state) => {
    return state.tasks;
  });

  useEffect(() => {
    dispatch(getProjectTasksAsync(id));
  }, []);

  return (
    <div className="container bg-white p-4 mt-5">
      <div className="d-flex justify-content-between">
        <h1>{`Tasks for project -  ${name}`}</h1>
        <button className="btn btn-primary mb-2" onClick={() => navigate("/")}>
          All projects
        </button>
      </div>
      <AddTaskForm projectId={id} />
      <TaskList tasks={tasks} projectId={id} />
    </div>
  );
};

export default Tasks;
