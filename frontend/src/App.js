// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       {/* <p>hiii</p> */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "@mui/material";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        {/* Main content goes here */}
        <h1>Welcome to Black Cat AI</h1>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
