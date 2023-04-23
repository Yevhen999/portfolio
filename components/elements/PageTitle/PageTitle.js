import styles from "./PageTitle.module.css";

const PageTitle = ({ title }) => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>#{title}</h2>
    </div>
  );
};

export default PageTitle;
