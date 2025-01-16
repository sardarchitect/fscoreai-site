"use client";
import React from "react";
import { useAlertPopUpContext } from "@/src/context/alertPopup";

const Alert = () => {
  const { alertState } = useAlertPopUpContext();
  const { isVisible, message, type } = alertState;

  const getColorClass = () => {
    switch (type) {
      case "success":
        return "bg-green-500 text-white";
      case "error":
        return "bg-red-500 text-white";
      case "warning":
        return "bg-yellow-500 text-black";
      default:
        return "bg-blue-500 text-white";
    }
  };

  return (
    <div className={`${isVisible ? "" : "hidden"}`}>
      <div className="fixed inset-0 mx-5 flex justify-center top-16 z-50">
        <div
          className={`animate-pulse text-center shadow-xl border h-fit w-fit rounded-full px-6 py-3 mt-4 backdrop-blur-lg `}
          // className={`animate-pulse shadow-xl border h-fit w-fit rounded-full px-6 py-3 mt-4 backdrop-blur-lg ${getColorClass()}`}
        >
          <p className="font-bold">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;

