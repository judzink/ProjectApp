import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "http://localhost:7000";

export const getProjectsAsync = createAsyncThunk(
  "projects/getProjectsAsync",
  async () => {
    const resp = await fetch(`${URL}/projects`);
    if (resp.ok) {
      const projects = await resp.json();
      return { projects };
    }
  }
);

export const addProjectAsync = createAsyncThunk(
  "projects/addProjectAsync",
  async (payload) => {
    const resp = await fetch(`${URL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: payload.name }),
    });

    if (resp.ok) {
      const project = await resp.json();
      return { project };
    }
  }
);

export const deleteProjectAsync = createAsyncThunk(
  "projects/deleteProjectAsync",
  async (payload) => {
    const resp = await fetch(`${URL}/projects/${payload.id}`, {
      method: "DELETE",
    });

    if (resp.ok) {
      return { id: payload.id };
    }
  }
);

export const ProjectSlice = createSlice({
  name: "projects",
  initialState: [],
  extraReducers: {
    [getProjectsAsync.fulfilled]: (state, action) => {
      return action.payload.projects;
    },
    [addProjectAsync.fulfilled]: (state, action) => {
      state.push(action.payload.project);
    },
    [deleteProjectAsync.fulfilled]: (state, action) => {
      return state.filter((project) => project.id !== action.payload.id);
    },
  },
});

export default ProjectSlice.reducer;
