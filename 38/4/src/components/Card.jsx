import React from "react";
import styles from "./Card.module.css";

function Card({ title, description }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Card;
