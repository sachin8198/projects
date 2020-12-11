import React from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import DrawerItem from "./components/DrawerItem";

function App() {
  return (
    <div className="app">
      <div className="app__drawer">
        <DrawerItem />
      </div>
      <div className="app__hero">
        <div class="app__header">
          <Header />
        </div>
        <div class="app__body">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
