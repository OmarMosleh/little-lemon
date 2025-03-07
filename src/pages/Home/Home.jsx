import React from 'react'
import Header from "../../components/header/Header"
import Main from "../../components/main/Main"
import styles from "./Home.module.css"
const Home = ({availableTimes}) => {
  console.log(availableTimes)
  return (
    <>
    <Header />
    <p>Available Times : </p>
    <ul className={styles.times_ul}>
    {availableTimes.map((time) => {
     return <li key={time}>{time}</li>
    })}
    </ul>
    <Main />
    </>
  )
}

export default Home