import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SidePanel from "./components/SidePanel";

function App() {
  return (
    <Router>
      <div className="App">
        {/* You can add more routes here if you want to switch between components */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#f5f5f5",
          }}
        >
          
          {/* Add your MathMasterCard component here if it's not yet imported */}
          {/* Example: */}
          <SidePanel />
        </div>
      </div>
    </Router>
  );
}

export default App;
