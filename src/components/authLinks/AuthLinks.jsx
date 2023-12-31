"use client";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const {status} = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>Logout</span>
        </>
      )}
      
      {/* menu for mobile devices to show links */}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {/* when hamburger icon(menu) is clicked the links shown in big screens  should be shown in column wise now*/}
      {/* this menu can be toggled. so show this only when "open" is true*/}

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login" className="styles.link">
              Login{" "}
            </Link>
          ) : (
            <>
              <Link href="/write">Write </Link>
              <span className="styles.link">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
