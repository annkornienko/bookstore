"use client";

import React, { ReactNode } from "react";
import styles from "./components.module.css";

interface PopUpProps {
  children: ReactNode;
}

const PopUp: React.FC<PopUpProps> = ({ children }) => {
  return (
    <div className={styles.popUp}>
      <div className={styles.popUpContent}>
        {children}
        </div>
    </div>
  );
};

export default PopUp;
