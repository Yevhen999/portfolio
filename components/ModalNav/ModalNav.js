import Link from "next/link";
import styles from "./ModalNav.module.css";

import SocList from "../SocList/SocList";

const ModalNav = () => {
  const navLinks = ["home", "works", "about-me", "contacts"];

  return (
    <div className={styles.modalWrap}>
      <ul className={styles.modalList}>
        {navLinks.map((link) => (
          <li key={link} className={styles.modalItem}>
            <Link href="/" className={styles.modalLink}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <SocList />
    </div>
  );
};

export default ModalNav;
