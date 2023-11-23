import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import Info from "./Info";
import "./style.css";

function ToDoApp() {
  return (
    <section className="todoapp">
      <Main />
      <Footer />
      <Info />
    </section>
  );
}

export default ToDoApp;
