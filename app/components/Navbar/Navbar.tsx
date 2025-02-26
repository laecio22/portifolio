import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/logos/logoComercio.png";
import Link from "next/link";
import NavItem, { NavItemInterface } from "../NavItem/NavItem";
import styles from "./style.module.css";

const Navbar = () => {
  const items: NavItemInterface[] = [
    {
      url: "/",
      label: "Home",
    },
    {
      url: "/",
      label: "Sobre",
    },
    {
      url: "/",
      label: "Experiência",
    },
    {
      url: "/",
      label: "Projetos",
    },

    {
      url: "/",
      label: "Resumo",
    },
    {
      url: "/",
      label: "Contato",
    },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.containerLogo}>
        <Link href="/" className={styles.imgLogo}>
          <Image src={Logo} alt="logo da  aplicação" width={50} />
        </Link>
        <span className={styles.nameLogo}>Laécio</span>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navItems}>
          {items.map((item, index) => {
            return <NavItem url={item.url} label={item.label} key={index} />;
          })}
        </ul>
        <button className={styles.btnDefault}>Contatar</button>
      </nav>
    </header>
  );
};

export default Navbar;
