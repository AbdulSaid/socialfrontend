import React, { useReducer } from "react";

// Initial State
const initialState = {
  url: "http://speersocialbackend.herokuapp.com",
};

// Reducer (all state change going to happen herre)
// action = {type: "" , payload: ""}
const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// App Context
const AppContext = React.createContext(null);

// App state component
export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

// useAppState hook

export const useAppState = () => {
  return React.useContext(AppContext);
};
