import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSlice";
import taskReducer from "./taskSlice";

export default configureStore({
  reducer: {
    projects: projectReducer,
    tasks: taskReducer,
  },
});
