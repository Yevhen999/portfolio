import Image from "next/image";
import menu from "../public/menu.svg";
import logo from "../public/logo.svg";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <div className={styles.navbarWrap}>
        <div className={styles.navbarLogoWrap}>
          <Image className={styles.navbarLogo} src={logo} alt="logo" />
          <Link className={styles.navbarLink} href="/">
            Yevhen
          </Link>
        </div>
        <Image src={menu} alt="menu icon" />
      </div>
    </header>
  );
};

export default Navbar;
