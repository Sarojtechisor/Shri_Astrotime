import React from "react";
import styles from './loading.module.css';
const Loading = () => {
  return (
    <div className={styles.LoadingBG}>
      <div className="animate-spin border-t-4 border-blue-500 rounded-full" id={styles.LoadingAnimation}></div>
    </div>
  );
};

export default Loading;
