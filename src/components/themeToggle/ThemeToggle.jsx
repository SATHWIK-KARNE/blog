"use client"
import React, { useContext, useEffect, useState } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const [isClient, setIsClient] = useState(false);

  // Prop 'style' did not match error=> mismatch between CSR and SSR styling
  // to avoid this render styles only on CSR
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        isClient
          ? (theme === "dark"
              ? { backgroundColor: "white" }
              : { backgroundColor: "black" })
          : {} // Empty object for SSR to avoid style mismatch
      }
    >
      <Image
        className={styles.imagesize}
        src="/moon.png"
        alt="darkmode"
        width={14}
        height={14}
      />
      <div
        className={styles.ball}
        style={
          isClient
            ? {
                [theme === 'dark' ? 'left' : 'right']: '1px',
                background: theme === 'dark' ? '#0f172a' : 'white'
              }
            : {} // Empty object for SSR to avoid style mismatch
        }
      ></div>
      <Image
        className={styles.imagesize}
        src="/sun.png"
        alt="lightmode"
        width={14}
        height={14}
      />
    </div>
  );
};

export default ThemeToggle;
