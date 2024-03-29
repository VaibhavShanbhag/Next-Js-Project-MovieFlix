import React from "react";
import styles from "../styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png"
import Nav from "./nav";

const Header = () => {
  return(
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src={logo} width={150} height={40} alt="Logo"/>
        </Link>
      </div>
        <Nav/>
    </header>
  )
}

export default Header;