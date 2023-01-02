import React from 'react'


import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
        <h1><span>Car</span>Bazaar</h1>
            <p>&copy; Copyright 2022</p>
        </div>
    </div>
  )
}

export default Footer