"use client"
import Image from 'next/image'
import styles from './footer.module.css'
import React from 'react'

const Footer = () => {
    console.log("hello")
  return (
    <div className={styles.container}>
        <div>@{new Date().getFullYear()} monds. All rights reserved.</div>
        <div className={styles.social}>
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt="monds facebook"/>
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="monds twitter"/>
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="monds instagram"/>
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="monds youtube"/>
        </div>
    </div>
  )
}

export default Footer