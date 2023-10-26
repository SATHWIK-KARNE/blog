"use client";

// import { ThemeContext } from "@/context/ThemeContext";
// import React, { useContext } from "react";
// const ThemeProvider = ({children}) => {
//   const {theme} = useContext(ThemeContext);
//   return <div className={theme}>{children}</div>
// };
// export default ThemeProvider;

// but the above gave this error:  "Prop className did not match" cuz there is a mismatch between the initial server render and the subsequent client render of your components, particularly when dealing with client-specific behavior like adding or changing CSS classes.

// The useEffect hook runs on the client side after the initial server render is complete. This hook listens for changes in the theme variable (provided by the context).
// useEffect updates any changes made to {theme} inside clientRenderedClass at client side and this style is applied
// By this approach, the initial server render doesn't need to know about the client-specific behavior (like applying a class based on the theme). Instead, this is handled on the client side, which helps avoid the "Prop className did not match" error

import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [clientRenderedClass, setClientRenderedClass] = useState("");
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      // Apply the theme class on the client side
      setClientRenderedClass(theme);
    }
  }, [theme]);

  return <div className={clientRenderedClass}>{children}</div>;
};

export default ThemeProvider;