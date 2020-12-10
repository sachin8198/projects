import React from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <div class="app__header">
        <Header />
      </div>
      <div class="app__body">
        <Body />
      </div>
    </div>
  );
}

export default App;
