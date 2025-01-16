"use client";
import React, { createContext, useContext, useState } from "react";
import { ALERT_MESSAGES } from "../constants/alertMessages";

type AlertState = {
  isVisible: boolean;
  message: string;
  type: "success" | "error" | "warning" | "info";
};

type AlertContextType = {
  alertState: AlertState;
  showAlert: (alert: typeof ALERT_MESSAGES[keyof typeof ALERT_MESSAGES]) => void;
};

const AlertPopupContext = createContext<AlertContextType | undefined>(undefined);

export const AlertPopUpProvider = ({ children }: { children: React.ReactNode }) => {
  const [alertState, setAlertState] = useState<AlertState>({
    isVisible: false,
    message: "Welcome to Fscore ai",
    type: "success",
  });

  const showAlert = (alert: typeof ALERT_MESSAGES[keyof typeof ALERT_MESSAGES]) => {
    setAlertState({ isVisible: true, message: alert.message, type: alert.type });

    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
      setAlertState((prev) => ({ ...prev, isVisible: false }));
    }, 6000);
  };

  return (
    <AlertPopupContext.Provider value={{ alertState, showAlert }}>
      {children}
    </AlertPopupContext.Provider>
  );
};

export const useAlertPopUpContext = (): AlertContextType => {
  const context = useContext(AlertPopupContext);
  if (!context) {
    throw new Error("useAlertPopUpContext must be used within an AlertPopUpProvider");
  }
  return context;
};






// "use client"
// import { createContext, useContext, useState } from "react";

// const Context = createContext();

// export function AlertPopUpProvider({ children }) {
//   // const [showAlertPopup, setShowAlertPopup] = useState(false);
//   const [alertState, setAlertState] = useState({
//     isVisible: false, // Controls visibility of the alert
//     message: "", // The alert message
//     type: "success", // The alert type (e.g., success, error)
//   });

//   return (
//     <Context.Provider value={[showAlertPopup, setShowAlertPopup]}>{children}</Context.Provider>
//   );
// }

// export function useAlertPopUpContext() {
//   return useContext(Context);
// }