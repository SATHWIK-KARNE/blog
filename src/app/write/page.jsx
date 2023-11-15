"use client"

import React, { useState, useEffect } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";

// we are using quill on client side but we get document reference error when server access it(cuz next.js is SSR)
//  To fix the "ReferenceError: document is not defined" error, you should ensure that the code related to Quill is executed only on the client side. You can achieve this by wrapping the code with a useEffect hook to run it after the component has mounted on the client side.

import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import "react-quill/dist/quill.bubble.css"; // Import the styles

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    // Initialize Quill here, but make sure it runs on the client side.
    if (typeof window !== "undefined") {
      const quill = require("quill");
      // Your Quill setup code here
    }
  }, []);

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>

        {/* quill library gives formatting tools like bold, italic. It can only be used if there is some content in the write box */}
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}

        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Write your own post..."
        />
      </div>

      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
