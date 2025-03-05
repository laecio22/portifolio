import React from 'react'
import styles from './style.module.css'
import { roboto } from '@/app/layout'

interface CaracterNameInterface {
    letter: string
}

const LetterName = ({letter}: CaracterNameInterface) => {
  return (
    <span className={`${styles.caracterName} ${roboto.className}`}>
      {letter}
    </span>
  )
}

export default LetterName