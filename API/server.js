const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const { json } = require("body-parser");
const { nanoid } = require("nanoid");

dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors());
app.use(json());

let projects = [
  {
    id: nanoid(),
    name: "Project 1",
    createdAt: new Date().toLocaleDateString("en-UK"),
    tasks: [
      {
        id: nanoid(),
        name: "Task 1",
        description: "Run 10km",
        createdAt: new Date().toLocaleDateString("en-UK"),
        estimate: 1,
      },
      {
        id: nanoid(),
        name: "Task 2",
        description: "Run 20km",
        createdAt: new Date().toLocaleDateString("en-UK"),
        estimate: 2.5,
      },
    ],
  },
  {
    id: nanoid(),
    name: "Project 2",
    createdAt: new Date().toLocaleDateString("en-UK"),
    tasks: [],
  },
  {
    id: nanoid(),
    name: "Project 3",
    createdAt: new Date().toLocaleDateString("en-UK"),
    tasks: [],
  },
];

app.get("/projects", (req, res) => res.send(projects));

app.post("/projects", (req, res) => {
  const todo = {
    name: req.body.name,
    id: nanoid(),
    createdAt: new Date().toLocaleDateString("en-UK"),
    tasks: [],
  };
  projects.push(todo);
  return res.send(todo);
});

app.post("/tasks", (req, res) => {
  const task = {
    id: nanoid(),
    name: req.body.name,
    estimate: req.body.estimate,
    description: req.body.description,
    createdAt: new Date().toLocaleDateString("en-UK"),
  };
  const projectId = req.body.projectId;
  const index = projects.findIndex((project) => project.id == projectId);
  projects[index].tasks.push(task);
  return res.send(task);
});

app.get("/projects/:id", (req, res) => {
  const id = req.params.id;
  const index = projects.findIndex((todo) => todo.id == id);
  console.log(projects[index]);
  return res.send(projects[index].tasks);
});

app.delete("/projects/:id", (req, res) => {
  const id = req.params.id;
  const index = projects.findIndex((todo) => todo.id == id);
  if (index > -1) {
    projects.splice(index, 1);
  }

  res.send(projects);
});

app.delete("/tasks/:projId/:taskId", (req, res) => {
  console.log("PARAPMS", req.params);
  const projId = req.params.projId;
  const taskId = req.params.taskId;
  const projIndex = projects.findIndex((project) => project.id == projId);
  const taskindex = projects[projIndex].tasks.findIndex(
    (task) => task.id == taskId
  );
  if (taskindex > -1) {
    projects[projIndex].tasks.splice(taskindex, 1);
  }

  res.send(projects[projIndex].tasks);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));
