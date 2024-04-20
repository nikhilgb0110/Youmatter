import React from "react";
import styles from "./Articles.module.css";

function Articles({ title, description, link, Image }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={`text-2xl ${styles.inter}`}>{title}</div>
        <div className={` ${styles.desc}`}>{description}</div>
        <a href={link} target="_blank" className={styles.button}>
          <div>Learn more</div>
        </a>
      </div>
      <div className="overflow-hidden relative rounded-lg">
        <img
          src={Image}
          alt=""
          className="sm:absolute sm:max-w-max sm:h-full"
        />
      </div>
    </div>
  );
}

export default Articles;
