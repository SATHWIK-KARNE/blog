// this is a client side component
// In nextJS Initial page rendering occurs on the server side. However, once the initial page is rendered on the server and sent to the client's browser, the client-side JavaScript takes over. This is often referred to as "hydration."
// the transition from server-side rendering to client-side rendering happens automatically in Next.js, allows the code to access localStorage as intended.

"use client";

import { createContext, useEffect, useState } from "react";

// first create a themeContext to store "theme state"(initially light mode)
// using that state text color,bg color of themeToggle is decided

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  // verify that it's running on the client side before attempting to access the localStorage object(its only browser API not server's).

  if (typeof window !== "undefined" && window.localStorage) {
    const value = localStorage.getItem("theme");
    // if there is nothing in localStorage return light else value
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => {
  // initializing the theme state as light
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
