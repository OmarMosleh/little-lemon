import React from 'react'
import styles from './PrimaryButton.module.css'
import { Link } from 'react-router'
const PrimaryButton = ({name, reference}) => {
  return (
    <>
    <Link to={reference} className={styles.link}>
    <div className={styles.primaryButton}>
      {name}
    </div>
    </Link>
    </>

  )
}

export default PrimaryButton