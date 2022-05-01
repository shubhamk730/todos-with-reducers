import React from "react";

const listContext = React.createContext({
  listItems: [],
  addToList: () => {},
  removeFromList: () => {},
});

export default listContext;
