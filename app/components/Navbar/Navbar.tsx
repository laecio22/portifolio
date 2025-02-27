"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/assets/logos/logoComercio.png";
import Link from "next/link";
import NavItem, { NavItemInterface } from "../NavItem/NavItem";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const items: NavItemInterface[] = [
    {
      url: "/",
      label: "Home",
    },
    {
      url: "/sobre",
      label: "Sobre",
    },
    {
      url: "/experiencia",
      label: "Experiência",
    },
    {
      url: "/projetos",
      label: "Projetos",
    },

    {
      url: "/resumo",
      label: "Resumo",
    },
    {
      url: "/contato",
      label: "Contato",
    },
  ];

  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.containerLogo}>
        <Link href="/" className={styles.imgLogo}>
          <Image src={Logo} alt="logo da  aplicação" width={50} />
        </Link>
        <span className={styles.nameLogo}>Laécio</span>
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
        <button className={styles.btnDefault}>Contatar</button>
      </nav>
    </header>
  );
};

export default Navbar;
