import React from "react";
import styles from "./Item.module.css";
const Item = (props) => {
  return (
    <>
      <div className={styles.card}>
        <img src={props.image} alt={props.alt} className={styles.image} />
        <div className={styles.card_head}>
          <p className={styles.name}>{props.itemName}</p>
          <p className={styles.price}>${props.price}</p>
        </div>
        <p className={styles.description}>{props.description}</p>
      </div>
    </>
  );
};

export default Item;
