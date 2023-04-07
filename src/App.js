import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage";
import { NotFound } from "./components/notFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}
export default App;
