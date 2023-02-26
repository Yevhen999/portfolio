import Link from "next/link";
import styles from "./Buttons.module.css";

const PrimaryBtn = ({ children }) => {
  return (
    <button type="button" className={styles.btn}>
      <Link href="/" className={styles.btnLink}>
        Live ---- {children}
      </Link>
    </button>
  );
};

export default PrimaryBtn;
