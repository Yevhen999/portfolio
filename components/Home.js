import styles from "../styles/Home.module.css";
const Home = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>
        Yevhen is a{" "}
        <span className={styles.heroTitleText}>front-end developer</span>
      </h1>
      <p className={styles.heroText}>
        He crafts responsive websites where technologies meet creativity
      </p>
    </section>
  );
};

export default Home;
