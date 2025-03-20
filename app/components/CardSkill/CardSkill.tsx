import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
interface ISkills {
  title: string,
  imgSkill: string
}

const CardSkill = ({title, imgSkill}: ISkills) => {
  return (
    <div className={styles.containerCardSkills}>
      <Image src={imgSkill} alt={title} className={styles.img}/>
      <div>{title}</div>
     
    </div>
  )
}

export default CardSkill