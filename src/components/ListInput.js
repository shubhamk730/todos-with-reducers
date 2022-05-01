import React, { useContext, useState } from "react";
import listContext from "../store/list-context";
import classes from "./ListInput.module.css";

export default function ListInput() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const listCtx = useContext(listContext);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descChangeHandler = (event) => {
    setDesc(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    listCtx.addToList({
      title: title,
      desc: desc,
    });

    setTitle("");
    setDesc("");
  };

  return (
    <div className={classes.holder}>
      <h3>Add to do here</h3>
      <form onSubmit={formSubmitHandler}>
        <div className={classes["list-item"]}>
          <label htmlFor="task-name"> Enter todo title : </label>
          <input
            name="task-name"
            type="text"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={classes["list-item"]}>
          <label htmlFor="task-desc"> Enter todo description : </label>
          <input
            name="task-desc"
            type="text"
            value={desc}
            onChange={descChangeHandler}
          />
        </div>
        <div className={classes.submitButton}>
          <button type="submit">Add todo</button>
        </div>
      </form>
    </div>
  );
}
