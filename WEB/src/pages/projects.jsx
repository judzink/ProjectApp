import React, { useEffect } from "react";
import AddTodoForm from "../components/project/AddProjectForm";
import ProjectList from "../components/project/ProjectList";
import { useSelector, useDispatch } from "react-redux";
import { getProjectsAsync } from "../redux/projectSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getProjectsAsync());
  }, [dispatch]);

  return (
    <div className="container bg-white p-4 mt-5">
      <h1>My Project List</h1>
      <AddTodoForm />
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
