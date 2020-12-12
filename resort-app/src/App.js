import React from "react";
import "./App.css";
import Body from "./components/Body";
import ResponsiveDrawer from "./components/ResponsiveDrawer";

function App() {
  return (
    <div className="app">
      <ResponsiveDrawer />
      <div className="app__hero">
        <div class="app__header"></div>
        <div class="app__body">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
