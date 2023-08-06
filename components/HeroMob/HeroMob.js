import Image from "next/image";
import styles from "./HeroMob.module.css";
import heroPhoto from "../../public/hero-group.png";
import mark from "../../public/mark.png";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

const HeroMob = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContentWrap}>
        <div className={styles.heroLeftSide}>
          <h1 className={styles.heroTitle}>
            Yevhen is a{" "}
            <span className={styles.heroTitleText}>Full Stack Developer</span>
          </h1>
          <p className={styles.heroText}>
            He crafts responsive websites where technologies meet creativity
          </p>
          <MediaQuery minWidth={768}>
            <button type="button" className={styles.heroContactBtn}>
              <Link
                href="mailto:leshchenkoyevhen@gmail.com"
                className={styles.heroBtnLink}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                Contact me !!
              </Link>
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
                <Link
                  className={styles.heroLink}
                  href="https://weather-app-yevhen999.vercel.app/"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  Weather App
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      <MediaQuery minWidth={768}>
        <div className={styles.quote}>
          <div className={styles.quoteWrap}>
            <ImQuotesLeft size={20} className={styles.quoteLeft} />
            <p className={styles.quoteText}>
              With great power comes great electricity bill
            </p>
            <ImQuotesRight size={20} className={styles.quoteRight} />
          </div>
          <div className={styles.quoteAuthorWrap}>
            <p className={styles.quoteAuthor}>- Dr. Who</p>
          </div>
        </div>
      </MediaQuery>
    </section>
  );
};

export default HeroMob;
