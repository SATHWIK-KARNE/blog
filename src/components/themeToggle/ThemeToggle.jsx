"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

// there will be 2 images for themes which will be toggled
// both are at 2 ends and only 1 is shown at a time cuz the ball moves on top of any 1 image hiding other
// this switching functionality implemented using context API

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  // console.log(theme)

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : {  backgroundColor: "black" }
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
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
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
