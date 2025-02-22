import React from 'react'
import styles from './PrimaryButton.module.css'
const PrimaryButton = ({name}) => {
  return (
    <>
    <div className={styles.primaryButton}>
      {name}
    </div>
    </>

  )
}

export default PrimaryButton