import Navbar from "../components/Navbar/Navbar";
import Portfolio from "../components/Portfolio/Portfolio";
import ProjectDetail from "../components/ProjectDetail/ProjectDetail";
// lazyload
import "lazysizes";
import "lazysizes/plugins/blur-up/ls.blur-up";
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
      </Router>
    </div>
  );
}
export default App;
