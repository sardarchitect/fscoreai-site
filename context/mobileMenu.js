"use client"
import { createContext, useContext, useState } from "react";

const Context = createContext();

export function MobileMenuProvider({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Context.Provider value={[mobileMenuOpen, setMobileMenuOpen]}>{children}</Context.Provider>
  );
}

export function useMobileMenuContext() {
  return useContext(Context);
}