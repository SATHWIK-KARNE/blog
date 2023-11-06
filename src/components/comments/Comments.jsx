import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment...."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to comment!</Link>
      )}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Sathwik Karne</span>
              <span className={styles.date}>01.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius facere veniam dolorum esse architecto ut iure aperiam illo molestiae, deserunt laudantium assumenda quam! Adipisci eum quae, dolor suscipit totam ipsa!</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Sathwik Karne</span>
              <span className={styles.date}>01.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius facere veniam dolorum esse architecto ut iure aperiam illo molestiae, deserunt laudantium assumenda quam! Adipisci eum quae, dolor suscipit totam ipsa!</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Sathwik Karne</span>
              <span className={styles.date}>01.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius facere veniam dolorum esse architecto ut iure aperiam illo molestiae, deserunt laudantium assumenda quam! Adipisci eum quae, dolor suscipit totam ipsa!</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Sathwik Karne</span>
              <span className={styles.date}>01.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius facere veniam dolorum esse architecto ut iure aperiam illo molestiae, deserunt laudantium assumenda quam! Adipisci eum quae, dolor suscipit totam ipsa!</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
