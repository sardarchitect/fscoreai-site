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
      <div className="fixed bottom-4 left-4 w-full max-w-md py-4 px-6 shadow-2xl border rounded-lg bg-white text-gray-800 text-start flex flex-col items-start z-[5000] bg-opacity-90">
        <h2 className="text-xl font-semibold mb-3">We use cookies!</h2>
        <p className="text-sm mb-4">
          This website uses necessary cookies to ensure its proper functioning and other cookies which are listed in the preference center and are only set after consent.
        </p>
        <div className="flex w-full space-x-2">
          <button
            onClick={declineConsent}
            className="w-1/2 bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded"
          >
            Customize
          </button>
          <button
            onClick={acceptConsent}
            className="w-1/2 bg-Mercury-50 text-white text-sm px-4 py-2 rounded"
          >
            I agree
          </button>
        </div>
      </div>
    </div>
  );
};
