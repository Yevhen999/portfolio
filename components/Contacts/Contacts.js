import Image from "next/image";
import Link from "next/link";
import styles from "./Contacts.module.css";
import { TfiEmail } from "react-icons/tfi";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <h2 className={styles.contactsTitle}>#contacts</h2>
      <div className={styles.contactsWrap}>
        <div className={styles.contactsTextWrap}>
          <p className={styles.contactsText}>
            I am interested in a full-time position with a company that aims to
            make everyday life and business easier, more productive and
            user-friendly. However, if you have other request or question, don’t
            hesitate to contact me
          </p>
        </div>
        <div className={styles.contactsListWrap}>
          <h3 className={styles.contactsListTitle}>Message me here</h3>
          <ul className={styles.contactsList}>
            <li className={styles.contactsItem}>
              <Link
                href="mailto:leshchenkoyevhen@gmail.com"
                className={styles.contactsLink}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <TfiEmail size={21} className={styles.contactsListIcon} />
                leshchenkoyevhen@gmail.com
              </Link>
            </li>
            <li className={styles.contactsItem}>
              <Link
                href="https://github.com/Yevhen999"
                className={styles.contactsLink}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <GoMarkGithub size={21} className={styles.contactsListIcon} />
                GitHub
              </Link>
            </li>
            <li className={styles.contactsItem}>
              <Link
                href="https://www.linkedin.com/in/yevhen-leshchenko/"
                className={styles.contactsLink}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <BsLinkedin size={21} className={styles.contactsListIcon} />
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
