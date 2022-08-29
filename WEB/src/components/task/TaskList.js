import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, projectId }) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} projectId={projectId} />
      ))}
    </ul>
  );
};

export default TaskList;
