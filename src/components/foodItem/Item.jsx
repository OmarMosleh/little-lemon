import React from "react";
import styles from "./Item.module.css";
import { MdDeliveryDining } from "react-icons/md";

const Item = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.upper}>
          <img src={props.image} alt={props.alt} className={styles.image} />
          <div className={styles.card_head}>
            <p className={styles.name}>{props.itemName}</p>
            <p className={styles.price}>${props.price}</p>
          </div>
        </div>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.delivery}>
          Order Delivery &nbsp; <MdDeliveryDining />
        </p>
      </div>
    </>
  );
};

export default Item;
