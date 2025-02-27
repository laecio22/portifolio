import React from 'react'
import styles from './style.module.css'
import Link from 'next/link'

export interface NavItemInterface {
    url: string;
    label: string;
    isActive?: boolean;
}

const NavItem = ({url, label, isActive}: NavItemInterface) => {
  return (
    <li className={styles.navItem}>
    <Link href={url} className={ `${styles.navLink} ${isActive ? styles.active : ''}`}>{label}</Link>
  </li>
  )
}

export default NavItem