import React from 'react'

import styles from './animation.module.css'
const Animation = () => {
  return (
    <div>   
        <div className={styles.bg}></div>
        <div className={styles.StarField}>
        <div className={styles.layer}></div>
        <div className={styles.layer}></div>
        <div className={styles.layer}></div>
        </div>
    </div>
  )
}

export default Animation