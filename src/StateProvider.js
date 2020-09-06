// data layer using react context api to track basket

import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); // data layer

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// use inside a component
export const useStateValue = () => useContext(StateContext);
