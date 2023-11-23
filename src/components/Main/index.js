import React, { useState } from "react";
import Header from "../Header";

function Main() {
  const [toDo, settoDo] = useState([
    { title: "Learn Javascript", completed: "completed" },
    { title: "Learn React", completed: "" },
    { title: "Bee better!", completed: "" },
  ]);

  const deleteThis = (indexToDelete) => {
    const newList = [...toDo];
    newList.splice(indexToDelete, 1);
    settoDo(newList);
  };

  const onCheckBox = (index) => {
    const updatedToDo = [...toDo];
    updatedToDo[index] = {
      ...updatedToDo[index],
      completed: updatedToDo[index].completed ? "" : "completed",
    };
    settoDo(updatedToDo);
  };

  const checkAll = () => {
    const allCompleted = toDo.every((item) => item.completed === "completed");
    const updatedToDo = toDo.map((item) => ({
      ...item,
      completed: allCompleted ? "" : "completed",
    }));
    settoDo(updatedToDo);
  };

  return (
    <div>
      <Header toDo={toDo} addToDo={settoDo} />
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" onClick={checkAll}>
          Mark all as complete
        </label>
        <ul className="todo-list">
          {toDo.map((item, i) => (
            <li key={i} className={item.completed}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  onClick={() => onCheckBox(i)}
                />
                <label>{item.title}</label>
                <button className="destroy" onClick={deleteThis}></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Main;
