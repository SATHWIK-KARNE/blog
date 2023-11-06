import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
            nulla.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Sathwik Karne</span>
              <span className={styles.date}>01.11.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              ratione itaque nobis consequuntur fugiat laudantium veniam tenetur
              enim voluptatum maxime magnam in dolores earum natus culpa, ex qui
              mollitia possimus!
            </p>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              ratione itaque nobis consequuntur fugiat laudantium veniam tenetur
              enim voluptatum maxime magnam in dolores earum natus culpa, ex qui
              mollitia possimus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              ratione itaque nobis consequuntur fugiat laudantium veniam tenetur
              enim voluptatum maxime magnam in dolores earum natus culpa, ex qui
              mollitia possimus!
            </p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
