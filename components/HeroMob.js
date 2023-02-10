import Image from "next/image";
import styles from "../styles/HeroMob.module.css";
import heroPhoto from "../public/hero-group.png";
import mark from "../public/mark.png";
import Link from "next/link";
import dynamic from "next/dynamic";

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

const HeroMob = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContentWrap}>
        <div className={styles.heroLeftSide}>
          <h1 className={styles.heroTitle}>
            Yevhen is a{" "}
            <span className={styles.heroTitleText}>frontend developer</span>
          </h1>
          <p className={styles.heroText}>
            He crafts responsive websites where technologies meet creativity
          </p>
          <MediaQuery minWidth={768}>
            <button type="button" className={styles.heroContactBtn}>
              Contact me !!
            </button>
          </MediaQuery>
        </div>
        <div>
          <div className={styles.heroImgWrap}>
            <Image
              priority
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
      </div>
    </section>
  );
};

export default HeroMob;
