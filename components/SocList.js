import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import styles from "../styles/SocList.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

const SocList = () => {
  return (
    <ul className={styles.socList}>
      <li className={styles.socItem}>
        <Link href="https://github.com/Yevhen999" className={styles.socLink}>
          <MediaQuery maxWidth={767}>
            <GoMarkGithub className={styles.socIcon} size={46} />
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <GoMarkGithub className={styles.socIcon} size={23} />
          </MediaQuery>
        </Link>
      </li>
      <li className={styles.socItem}>
        <Link
          href="https://www.linkedin.com/in/yevhen-leshchenko/"
          className={styles.socLink}
        >
          <MediaQuery maxWidth={767}>
            <BsLinkedin className={styles.socIcon} size={46} />
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <BsLinkedin className={styles.socIcon} size={23} />
          </MediaQuery>
        </Link>
      </li>
    </ul>
  );
};

export default SocList;
