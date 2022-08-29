import { render } from "@testing-library/react";

import store from "../redux/store";
import { Provider } from "react-redux";
import AddTaskForm from "../components/task/AddTaskForm";
import TaskList from "../components/task/TaskList";
import TaskItem from "../components/task/TaskItem";

test("renders the add task form", () => {
  render(
    <Provider store={store}>
      <AddTaskForm />
    </Provider>
  );
});

test("renders the task list", () => {
  const tasks = [
    {
      id: 1,
      name: "Task 1",
      description: "Run 10km",
      createdAt: new Date().toLocaleDateString("en-UK"),
      estimate: 1,
    },
    {
      id: 2,
      name: "Task 2",
      description: "Run 20km",
      createdAt: new Date().toLocaleDateString("en-UK"),
      estimate: 2.5,
    },
  ];
  render(
    <Provider store={store}>
      <TaskList tasks={tasks} projectId={3} id={"test"} />
    </Provider>
  );
});

test("renders the task list item", () => {
  render(
    <Provider store={store}>
      <TaskItem
        task={{
          id: 1,
          name: "Task 2",
          description: "Run 20km",
          createdAt: new Date().toLocaleDateString("en-UK"),
          estimate: 2.5,
        }}
        projectId={"test"}
      />
    </Provider>
  );
});
