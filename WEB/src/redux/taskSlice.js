import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "http://localhost:7000";

export const getProjectTasksAsync = createAsyncThunk(
  "tasks/getProjectTasksAsync",
  async (id) => {
    const resp = await fetch(`${URL}/projects/${id}`);
    if (resp.ok) {
      const tasks = await resp.json();
      return { tasks };
    }
  }
);

export const addProjectTaskAsync = createAsyncThunk(
  "tasks/addProjectTaskAsync",
  async (payload) => {
    const resp = await fetch(`${URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectId: payload.projectId,
        name: payload.name,
        estimate: payload.estimate,
        description: payload.description,
      }),
    });

    if (resp.ok) {
      const task = await resp.json();
      return { task };
    }
  }
);

export const deleteProjectTaskAsync = createAsyncThunk(
  "tasks/deleteProjectAsync",
  async (payload) => {
    const resp = await fetch(
      `${URL}/tasks/${payload.projectId}/${payload.id}`,
      {
        method: "DELETE",
      }
    );

    if (resp.ok) {
      return { id: payload.id };
    }
  }
);

export const TaskSlice = createSlice({
  name: "tasks",
  initialState: [],
  extraReducers: {
    [getProjectTasksAsync.fulfilled]: (state, action) => {
      return action.payload.tasks;
    },
    [addProjectTaskAsync.fulfilled]: (state, action) => {
      state.push(action.payload.task);
    },
    [deleteProjectTaskAsync.fulfilled]: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
  },
});

export default TaskSlice.reducer;
