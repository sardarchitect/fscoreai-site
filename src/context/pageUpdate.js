"use client"
import { createContext, useContext, useState } from "react";

const Context = createContext();

export function PageUpdateProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Context.Provider value={[currentPage, setCurrentPage]}>{children}</Context.Provider>
  );
}

export function usePageUpdateContext() {
  return useContext(Context);
}