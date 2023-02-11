import Link from "next/link";
import styles from "styles/Buttons.module.css";

const PrimaryBtn = () => {
  return (
    <button type="button" className={styles.btn}>
      <Link href="/" className={styles.btnLink}>
        Live ----
      </Link>
    </button>
  );
};

export default PrimaryBtn;
