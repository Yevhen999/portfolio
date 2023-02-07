import Image from "next/image";
import menu from "../public/menu.svg";
import logo from "../public/logo.svg";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
// import MediaQuery from "react-responsive";

import dynamic from "next/dynamic";

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

const Navbar = () => {
  const navLinks = ["home", "works", "about-me", "contacts"];

  return (
    <header>
      <div className={styles.navbarWrap}>
        <div className={styles.navbarLogoWrap}>
          <Image className={styles.navbarLogo} src={logo} alt="logo" />
          <Link className={styles.navbarName} href="/">
            Yevhen
          </Link>
        </div>
        <MediaQuery minWidth={768}>
          <ul className={styles.navbarLinks}>
            {navLinks.map((link) => (
              <li key={link}>
                <p>{link}</p>
              </li>
            ))}
          </ul>
        </MediaQuery>
        <Image src={menu} alt="menu icon" />
      </div>
    </header>
  );
};

export default Navbar;
