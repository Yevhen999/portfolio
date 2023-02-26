import Link from "next/link";
import styles from "./ModalNav.module.css";

import SocList from "../SocList/SocList";

const ModalNav = ({ toggle }) => {
  const navLinks = [
    { name: "home", id: "#home" },
    { name: "projects", id: "#projects" },
    { name: "about-me", id: "#about-me" },
    { name: "contacts", id: "#contacts" },
  ];

  return (
    <div className={styles.modalWrap}>
      <ul className={styles.modalList}>
        {navLinks.map((link) => (
          <li key={link.id} className={styles.modalItem}>
            <Link onClick={toggle} href={link.id} className={styles.modalLink}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <SocList />
    </div>
  );
};

export default ModalNav;
