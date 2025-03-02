import React from 'react'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div  className={styles.header_container}>
      <div className={styles.content}>
      <h2>Little Lemon</h2>
      <h3>Chicago</h3>
      <p>we are a family owned Mediterranean restaurant, 
        focused on traditional recipes served with modern twist.
      </p>
      <PrimaryButton name="Reserve a table" reference="/Booking"/>
      </div>
      <div className={styles.post}>
        <img src={require("../../Assets/downloads/header.jpg")} alt="" />
      </div>
    </div>
  )
}

export default Header