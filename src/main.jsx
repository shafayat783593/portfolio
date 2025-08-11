import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ProjectCardPage from "./Components/Projects/ProjectCard";
import ProjectDetail from "./Components/projectsDetails/projectsDetails";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/projects" element={<ProjectCardPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
