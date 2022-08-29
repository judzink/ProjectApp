import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Projects from "../pages/projects";
import Tasks from "../pages/tasks";

export default function Router() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact={true} path={"/"} element={<Projects />} />
          <Route exact={true} path={"/tasks/:id"} element={<Tasks />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
