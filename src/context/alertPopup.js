"use client"
import { createContext, useContext, useState } from "react";

const Context = createContext();

export function AlertPopUpProvider({ children }) {
  const [showAlertPopup, setShowAlertPopup] = useState(false);

  return (
    <Context.Provider value={[showAlertPopup, setShowAlertPopup]}>{children}</Context.Provider>
  );
}

export function useAlertPopUpContext() {
  return useContext(Context);
}