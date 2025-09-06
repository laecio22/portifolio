"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/assets/logos/logoComercio.png";
import NavItem, { NavItemInterface } from "../NavItem/NavItem";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import LetterName from "../LetterName/LetterName";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const items: NavItemInterface[] = [
    {
      url: "#home",
      label: "Home",
    },
    {
      url: "#about",
      label: "Sobre",
    },
    {
      url: "#experiences",
      label: "Experiência",
    },
    {
      url: "#projects",
      label: "Projetos",
    },
   
    {
      url: "#contact",
      label: "Contato",
    },
  ];

  const pathname = usePathname();
  const caracterNameList:string[] = [
    'L', 'a', 'é', 'c', 'i', 'o'
  ]
  return (
    <header className={`${styles.header}`}>
      <div className={styles.containerLogo}>
        <Link href="#home" className={styles.imgLogo}>
          <Image src={Logo} alt="logo da  aplicação" width={50} />
        </Link>
        <span className={styles.nameLogo}>
          {
            caracterNameList.map((caracter, index)=>{
              return (
                <LetterName letter={caracter} key={index}/>
              )
            })
          }      
        
        </span>
      </div>
      <nav className={styles.navbar}>
        <ul className={`${styles.navItems} ${openMenu ? styles.open : ""}`}>
          {items.map((item, index) => {
            return (
              <NavItem
                url={item.url}
                label={item.label}
                key={index}
                isActive={pathname === item.url}
              />
            );
          })}
        </ul>
        <button
          className={styles.btnMobile}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <FaXmark /> : <FaBars />}
        </button>
        {/* <button className={styles.btnDefault}>Contatar</button> */}
      </nav>
    </header>
  );
};

export default Navbar;
