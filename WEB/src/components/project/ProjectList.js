import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
  return (
    <ul className="list-group">
      <ProjectItem
        id={"id"}
        name={"Name"}
        createdAt={"Created at"}
        disableDelete={true}
        tasks={"tasks"}
      />
      {projects?.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          name={project.name}
          createdAt={project.createdAt}
          tasks={project.tasks}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
