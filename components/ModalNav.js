import Link from "next/link";
import styles from "../styles/ModalNav.module.css";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";

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

      <ul className={styles.socList}>
        <li className={styles.socItem}>
          <Link href="https://github.com/Yevhen999" className={styles.socLink}>
            <GoMarkGithub className={styles.socIcon} size={46} />
          </Link>
        </li>
        <li className={styles.socItem}>
          <Link
            href="https://www.linkedin.com/in/yevhen-leshchenko/"
            className={styles.socLink}
          >
            <BsLinkedin className={styles.socIcon} size={46} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ModalNav;
