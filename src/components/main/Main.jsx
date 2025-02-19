import React from 'react'
import styles from './Main.module.css'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const Main = () => {
  return (
    <main>
      <div className={styles.heading}>
      <h2>This weeks specials !</h2>
      <PrimaryButton name="Online Menu" />
      </div>
    </main>
  )
}

export default Main