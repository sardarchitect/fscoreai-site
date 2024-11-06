"use client";
import { useThemeContext } from "@/src/context/theme";
import { setCookie, hasCookie } from "cookies-next";
import Link from "next/link";
import { useState, useEffect } from "react";

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [theme, setTheme] = useThemeContext();

  useEffect(() => {
    if (!hasCookie("consent")) {
      setShowConsent(true);
    }
  }, []);

  const acceptConsent = () => {
    setShowConsent(false);
    setCookie("consent", "true", {});

    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("updateGTMConsent"));
    }
  };

  const declineConsent = () => {
    setShowConsent(false);
    setCookie("consent", "false", {});
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className={`${theme}`}>
      <div className="fixed bottom-4 left-4 right-4 w-auto max-w-md py-4 px-4 md:px-6 shadow-2xl border rounded-lg bg-white text-gray-800 text-start flex flex-col items-start z-[5000] bg-opacity-90">
        <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">We use cookies!</h2>
        <p className="text-xs md:text-sm mb-3 md:mb-4">
          This website uses necessary cookies to ensure its proper functioning and other cookies which are listed in the preference center and are only set after consent.
        </p>
        <div className="flex w-full space-x-2">
          <button
            onClick={declineConsent}
            className="w-1/2 bg-gray-200 text-gray-700 text-xs md:text-sm px-3 py-2 md:px-4 md:py-2 rounded"
          >
            Customize
          </button>
          <button
            onClick={acceptConsent}
            className="w-1/2 bg-black text-white text-xs md:text-sm px-3 py-2 md:px-4 md:py-2 rounded"
          >
            I agree
          </button>
        </div>
      </div>
    </div>
  );
};
