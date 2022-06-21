import React, { useState, createContext } from "react";

const App = createContext({
  language: "pt",
});

function Provider({ children }) {
  return <App.Provider value={{ language: "pt" }}>{children}</App.Provider>;
}

export default Provider;
