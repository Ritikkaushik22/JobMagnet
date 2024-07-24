import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import GovtJobs from "./components/GovtJobs";
import YouTube from "./components/YouTube";
import PrivateJobs from "./components/PrivateJobs";
import Resumes from "./components/Resumes";
import SubscriptionPlan from "./components/SubscriptionPlan";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/govt-jobs" element={<GovtJobs />} />
          <Route path="/youtube" element={<YouTube />} />
          <Route path="/private-jobs" element={<PrivateJobs />} />
          <Route path="/resume" element={<Resumes />} />
          <Route path="/subscription-plan" element={<SubscriptionPlan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
