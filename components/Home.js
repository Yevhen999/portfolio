import Image from "next/image";
import styles from "../styles/Home.module.css";
import heroPhoto from "../public/hero-group.png";
import mark from "../public/mark.png";
import Link from "next/link";

const Home = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContentWrap}>
        <h1 className={styles.heroTitle}>
          Yevhen is a{" "}
          <span className={styles.heroTitleText}>frontend developer</span>
        </h1>
        <p className={styles.heroText}>
          He crafts responsive websites where technologies meet creativity
        </p>
      </div>
      <div>
        <div className={styles.heroImgWrap}>
          <Image
            className={styles.heroPhoto}
            src={heroPhoto}
            alt="hero-photo"
          />
        </div>
        <div className={styles.markWrap}>
          <Image src={mark} alt="hero-mark" />
          <p className={styles.heroBotText}>
            Currently working on{" "}
            <span>
              <Link className={styles.heroLink} href="/">
                Portfolio
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
