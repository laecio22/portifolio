import React from 'react'
import styles from './style.module.css'
import Link from 'next/link'

export interface NavItemInterface {
    url: string;
    label: string;
}

const NavItem = ({url, label}: NavItemInterface) => {
  return (
    <li className={styles.navItem}>
    <Link href={url} className={styles.navLink}>{label}</Link>
  </li>
  )
}

export default NavItem