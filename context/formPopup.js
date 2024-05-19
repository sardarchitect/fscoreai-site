"use client"
import { createContext, useContext, useState } from "react";

const Context = createContext();

export function FormPopUpProvider({ children }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Context.Provider value={[showPopup, setShowPopup]}>{children}</Context.Provider>
  );
}

export function useFormPopUpContext() {
  return useContext(Context);
}