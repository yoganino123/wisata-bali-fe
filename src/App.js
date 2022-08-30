import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Navbar,
  MainContent,
  Banner,
  Footer,
} from "./components";

function App() {
  return (
    <div className="main-page container-fluid">
      <Navbar></Navbar>
      <Banner></Banner>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
