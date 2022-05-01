import React, { useReducer } from "react";
import listContext from "./list-context";

// const initialList = [];

const listItemReducer = (state, action) => {
  if (action.type === "ADD") {
    const a = [...state, action.item];
    return a;
  }
  if (action.type === "REMOVE") {
    const a = state.filter((item) => item.title !== action.title);
    return a;
  }
};

const ListProvider = (props) => {
  const [listItems, dispatchList] = useReducer(listItemReducer, []);

  const itemAddHandler = (item) => {
    dispatchList({ type: "ADD", item: item });
  };

  const itemRemoveHandler = (title) => {
    dispatchList({ type: "REMOVE", title });
  };

  const listValue = {
    listItems,
    addToList: itemAddHandler,
    removeFromList: itemRemoveHandler,
  };

  return (
    <listContext.Provider value={listValue}>
      {props.children}
    </listContext.Provider>
  );
};

export default ListProvider;
