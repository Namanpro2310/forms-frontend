import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import logo from "./logo.svg";
import edisonLogo from "./assets/teachEdison.png";
import "./App.css";
import LoginPage from "./components/authorization/LoginPage";
import FormsList from "./components/forms/FormList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={edisonLogo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/forms" element={<FormsList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
