import Navbar from "../components/Navbar/Navbar";
import Portfolio from "../components/Portfolio/Portfolio";
import ProjectDetail from "../components/ProjectDetail/ProjectDetail";
// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// UI
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Portfolio />} />
          <Route path="/detail/:id/" element={<ProjectDetail />} />
          {/* 404 Page */}
        </Routes>

        {/* Footer */}
      </Router>
    </div>
  );
}
export default App;
