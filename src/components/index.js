import React from "react";
import Main from "./Main";
import Info from "./Info";
import "./style.css";

function ToDoApp() {
  return (
      <section className="todoapp">
        <Main />
        <Info />
      </section>
  );
}

export default ToDoApp;
