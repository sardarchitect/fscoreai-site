"use client";
import { useThemeContext } from "@/src/context/theme";
import { setCookie, hasCookie } from "cookies-next";
import Link from "next/link";
import { useState, useEffect } from "react";

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [theme, setTheme] = useThemeContext();
  useEffect(() => {
    // If no consent cookie is present, show the consent popup
    if (!hasCookie("consent")) {
      setShowConsent(true);
    }
  }, []);

  const acceptConsent = () => {
    // When user accepts consent, hide the popup and set a consent cookie
    setShowConsent(false);
    setCookie("consent", "true", {});

    // Trigger GTM script load
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("updateGTMConsent"));
    }
  };
  const declineConsent = () => {
    // When user declines the consent, simply hide the popup
    setShowConsent(false);
    setCookie("consent", "false", {});
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className={`${theme}`}>
      <div className=" ml-0 fixed bottom-0 left-1/2 w-full py-5 sm:py-15 sm:p-8  dark:bg-theme-blue dark:text-white bg-white text-theme-blue flex justify-center transform -translate-x-1/2 z-[5000] bg-opacity-90">
        <div className="w-5/6 max-w-7xl m-auto text-justify">
          <h2 className="text-2xl font-bold pb-5"> Welcome to fscore </h2>
          <p className="w-3/4">
            We use some <strong>standard analytics packages</strong> to
            understand general user behaviour, so we can figure out how to
            improve our content. This involves some cookies. Read our
            <Link href="/privacy_policy" className="font-bold hover:border-b-2">
              {" "}
              privacy policy.
            </Link>
            &nbsp; Are you OK with this?
          </p>
          <div className="mt- sm:mb- flex justify-end items-center">
            <button
              onClick={acceptConsent}
              className="dark:bg-white text-sm dark:text-theme-blue border-2 border-theme-blue sm:fixed sm:-translate-x-20 dark:sm:hover:border-white sm:hover:bg-theme-blue sm:hover:text-white px-4 py-2 rounded mr-4"
            >
              Accept
            </button>
            <button
              onClick={declineConsent}
              className="dark:bg-white text-sm dark:text-theme-blue border-2 border-theme-blue sm:fixed sm:translate-x-0 dark:sm:hover:border-white sm:hover:bg-theme-blue sm:hover:text-white px-4 py-2 rounded"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
