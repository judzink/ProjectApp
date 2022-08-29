import { render } from "@testing-library/react";

import store from "../redux/store";
import { Provider } from "react-redux";
import AddProjectForm from "../components/project/AddProjectForm";
import ProjectList from "../components/project/ProjectList";
import ProjectItem from "../components/project/ProjectItem";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("renders the add task form", () => {
  render(
    <Provider store={store}>
      <AddProjectForm />
    </Provider>
  );
});

test("renders the task list", () => {
  let projects = [
    {
      id: 1,
      name: "Project 1",
      createdAt: new Date().toLocaleDateString("en-UK"),
      tasks: [
        {
          id: 2,
          name: "Task 1",
          description: "Run 10km",
          createdAt: new Date().toLocaleDateString("en-UK"),
          estimate: 1,
        },
        {
          id: 3,
          name: "Task 2",
          description: "Run 20km",
          createdAt: new Date().toLocaleDateString("en-UK"),
          estimate: 2.5,
        },
      ],
    },
    {
      id: 4,
      name: "Project 2",
      createdAt: new Date().toLocaleDateString("en-UK"),
      tasks: [],
    },
    {
      id: 5,
      name: "Project 3",
      createdAt: new Date().toLocaleDateString("en-UK"),
      tasks: [],
    },
  ];
  render(
    <Provider store={store}>
      <ProjectList projects={projects} />
    </Provider>
  );
});

test("renders the task list item", () => {
  render(
    <Provider store={store}>
      <ProjectItem
        id={1}
        name={"Task 2"}
        createdAt={new Date().toLocaleDateString("en-UK")}
        disableDelete={true}
        tasks={[]}
      />
    </Provider>
  );
});
