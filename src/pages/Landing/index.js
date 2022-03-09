import React from 'react'
import styles from "./Landing.module.css"
import Navbar from "../../components/Navbar"

function Landing() {
  return (
    <div>
      <Navbar />
      <h1 className={styles.heading}>
        Welcome to Venture Hub
      </h1>
    </div>
  )
}

export default Landing