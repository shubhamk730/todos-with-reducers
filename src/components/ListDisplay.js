import React, { useContext } from "react";
import listContext from "../store/list-context";
import classes from "./ListDisplay.module.css";

export default function ListDisplay() {
  const listCtx = useContext(listContext);
  const todoRemover = (title) => {
    listCtx.removeFromList(title);
  };
  return (
    <ul className={listCtx.listItems.length > 0 ? classes.list : ""}>
      {listCtx.listItems.map((todo, index) => {
        return (
          <li key={index}>
            <div>
              <div>{todo.title}</div>
              <span>{todo.desc}</span>
              <button onClick={todoRemover.bind(null, todo.title)}>
                Remove This Item
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
