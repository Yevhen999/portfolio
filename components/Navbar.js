import Image from "next/image";
import menu from "../public/menu.svg";
import logo from "../public/logo.svg";
import Link from "next/link";
import Modal from "./Modal";
import styles from "../styles/Navbar.module.css";
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
          <nav>
            <ul className={styles.navbarList}>
              {navLinks.map((link) => (
                <li key={link}>
                  <Link href="/" className={styles.navbarItemText}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <Image src={menu} alt="menu icon" />
        </MediaQuery>
      </div>
      <Modal />
    </header>
  );
};

export default Navbar;
