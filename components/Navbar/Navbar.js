import Image from "next/image";
import menu from "/public/menu.svg";
import modalClose from "../../public/modal-close.svg";
import logo from "../../public/logo.svg";
import Link from "next/link";
import styles from "./Navbar.module.css";
import dynamic from "next/dynamic";

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

const Navbar = ({ modal, toggle }) => {
  const navLinks = [
    { name: "home", id: "#home" },
    { name: "projects", id: "#projects" },
    { name: "about-me", id: "#about-me" },
    { name: "contacts", id: "#contacts" },
  ];

  return (
    <header>
      <div className={styles.navbarWrap}>
        <div className={styles.navbarLogoWrap}>
          <Link className={styles.navbarName} href="/">
            <Image className={styles.navbarLogo} src={logo} alt="logo" />
            <span>Yevhen</span>
          </Link>
        </div>
        <MediaQuery minWidth={768}>
          <nav>
            <ul className={styles.navbarList}>
              {navLinks.map((link) => (
                <li key={link.id} className={styles.navbarItem}>
                  <Link href={link.id} className={styles.navbarLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          {!modal ? (
            <Image src={menu} alt="menu icon" onClick={toggle} />
          ) : (
            <Image src={modalClose} alt="modal close" onClick={toggle} />
          )}
        </MediaQuery>
      </div>
    </header>
  );
};

export default Navbar;
