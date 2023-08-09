import React from "react";
import styles from "./MyModal.module.css";

const MyModal = ({ children, modal, setModal }) => {
  return (
    <div
      className={
        modal ? [styles.myModal, styles.active].join(" ") : styles.myModal
      }
    >
      <div className={styles.myModalContent}>
        <div onClick={() => setModal(false)} className={styles.closeBtn}>
          X
        </div>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
