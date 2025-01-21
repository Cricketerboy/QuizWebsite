import React from "react";
import "./App.css";
import QuizApp from "./components/QuizApp";
import Result from "./components/Result";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <QuizApp />
    </div>
  );
}

export default App;
