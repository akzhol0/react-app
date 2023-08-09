import React from 'react';
import styles from './MyLoader.module.css';

const MyLoader = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.loader}></div>
    </div>
  )
}

export default MyLoader